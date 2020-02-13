const obj1 = { a: 1, b: 2 };
let obj2;

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

//浅拷贝
function shallowClone(obj) {
    if (!isObject(obj)) return obj;
    if (obj.constructor === Date) return new Date(obj);
    if (obj.constructor === RegExp) return new RegExp(obj);

    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
//或者
obj2 = Object.assign({}, obj1);
obj2 = { ...obj1 };
//数组直接用arr.concat()或arr.slice()复制

//深拷贝
function deepClone0(obj) {
    if (!isObject(obj)) return obj;
    if (obj.constructor === Date) return new Date(obj);
    if (obj.constructor === RegExp) return new RegExp(obj);

    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone0(obj[key]) : obj[key];
        }
    }
    return newObj;
}
//或者（只适用于纯JSON对象）
obj2 = JSON.parse(JSON.stringify(obj1));

//用weakmap实现深拷贝，保存遍历过的属性值（键必须是对象）
//这种方法可以解决循环引用的问题：target.target=target
//弱引用可随时被回收
function deepClone1(target, map = new WeakMap()) {
    if (isObject(target)) {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (let key in target) {
            cloneTarget[key] = deepClone1(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
}

//用while实现的forEach优化for..in
function forEach(arr, callback) {
    let index = -1;
    const len = arr.length;
    while (++index < len) {
        callback(arr[index], index);
    }
}
function deepClone2(target, map = new WeakMap()) {
    if (isObject(target)) {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);

        const keys = Array.isArray(target) ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = deepClone2(target[key], map);
        });

        return cloneTarget;
    } else {
        return target;
    }
}

//test
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};
target.target = target;
console.time();
console.log(deepClone2(target));
console.timeEnd();

//继续改写，添加对其他类型的拷贝
function getType(target) {
    return Object.prototype.toString.call(target);
}
function init(target) {
    return new target.constructor();
}
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const deepTags = [mapTag, setTag, arrayTag, objectTag];
const shallowTags = [boolTag, dateTag, errorTag, numberTag, regexpTag, stringTag, symbolTag];

function deepClone3(target, map = new WeakMap()) {
    //null和非对象类型直接返回
    if (!isObject(target)) {
        return target;
    }

    const type = getType(target);
    let cloneTarget;
    if (deepTags.includes(type)) {
        cloneTarget = init(target);
    } else {
        //处理不能遍历的对象
        const Ctor = target.constructor;
        switch (type) {
            case boolTag:
            case numberTag:
            case stringTag:
            case dateTag:
            case regexpTag:
                return new Ctor(target);
            case errorTag:
                return new Error(target.message);
            case symbolTag:
                return Object(Symbol.prototype.valueOf.call(target));
            default:
                return null;
        }
    }

    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    //拷贝set、map类型
    if (type === setTag) {
        console.log(target)
        target.forEach(value => {
            cloneTarget.add(deepClone3(value, map));
        });
    } else if (type === mapTag) {
        console.log(target)
        target.forEach((value, key) => {
            cloneTarget.set(key, deepClone3(value, map));
        });
    } else {
        //拷贝对象和数组
        const keys = Array.isArray(target) ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = deepClone3(target[key], map);
        });
    }

    return cloneTarget;
}

//test
const target1 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    field5: new String('emm'),
    empty: null,
    map: new Map(),
    set: new Set([1, 2, 3])
};
target1.target1 = target1;
console.time();
console.log(deepClone3(target1));
console.timeEnd();


//jquery extend的实现
//jQuery.extend( [deep], target, object1 [, objectN])
jQuery.extend = jQuery.fn.extend = function () {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        i = 2;  //源对象起始下标改成2
    }
    if (typeof target !== 'object' && !jQuery.isFunction(target)) {
        target = {};
    }
    //如果没传目标对象
    if (length === i) {
        target = this;
        --i;
    }

    for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                    continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && jQuery.isArray(src) ? src : [];
                    } else {
                        clone = src && jQuery.isPlainObject(src) ? src : {};
                    }

                    target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    return target;
}


//vue版深拷贝
function find(list, fn) {
    return list.filter(fn)[0];
}
function deepCopy(obj, cache = []) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const hit = find(cache, c => c.original === obj);
    if (hit) {
        return hit.copy;
    }

    const copy = Array.isArray(obj) ? [] : {};
    cache.push({
        original: obj,
        copy
    });
    Object.keys(obj).forEach(key => copy[key] = deepCopy(obj[key], cache));

    return copy;
}