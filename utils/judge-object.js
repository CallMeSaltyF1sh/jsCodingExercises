/**
 * 判断是不是纯对象
 * 即没有原型的或者通过new Object创建的
 */
function isPlainObj(obj) {
    if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
        return false;
    }

    const proto = Object.getPrototypeOf(obj);
    if (!proto) {
        return true;
    }
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    //如果Ctor是自定义的构造函数的话hasOwnProperty.toString.call(Ctor)得到的是Ctor本身的字符串形式
    //如果Ctor是Object得到的是"function Object() { [native code] }"
    //这里如果用Object.prototype.toString.call()来判断不管Object还是自定义构造函数得到的都是"[object Function]"，就判断不出来了
    return typeof Ctor === 'function' && hasOwnProperty.toString.call(Ctor) === hasOwnProperty.toString.call(Object);
}

/**
 * 判断是否是空对象
 */
function isEmptyObj(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}


/**
 * 判断类数组对象
 */
function isArrayLike(obj) {
    if (!obj || typeof obj === 'function' || obj === obj.window) {
        return false;
    }
    //先取length属性
    const length = 'length' in obj && obj.length;
    //length不为0的话必须存在length-1属性
    return typeof obj === 'array' || length === 0 || (typeof length === 'number' && length > 0 && (length - 1) in obj);
}