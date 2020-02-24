//for双层循环
//对象和NaN不去重
function distinct0(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                len--;
                j--;
            }
        }
    }
    return arr;
}
//先排序再去掉相邻重复项（可改变顺序的话）
//对象和NaN不去重
//只要测试数组含非数字元素sort排序就会出问题造成部分元素去重失效
//纯数字数组适用于这个方法
function distinct1(arr) {
    arr.sort((a, b) => (a - b));
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
            len--;
            i--;
        }
    }
    return arr;
}

//filter+indexOf
//对象不去重，NaN被忽略
function distinct2(arr) {
    return arr.filter((item, index) => (
        arr.indexOf(item) === index)
    );
}

//set去重（速度快）
//对象不去重，NaN去重
function distinct3(arr) {
    return Array.from(new Set(arr));
}
//简化
function distinct4(arr) {
    return [...new Set(arr)];
}

//用map保存
//对象不去重，NaN去重
function distinct5(arr) {
    const map = new Map();
    return arr.filter((item) => (
        !map.has(item) && map.set(item, true)
    ));
}

//用obj键值对保存
//全部去重
function distinct6(arr) {
    const obj = {};
    return arr.filter((item) => (
        //用typeof item + item作为属性名是为了防止把123和'123'识别为同一个属性
        obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    ));
}

//用reduce
//只有对象不去重
function distinct7(arr) {
    return arr.reduce((result, curr) => {
        if (!result.includes(curr)) {
            result.push(curr);
        }
        return result;
    }, []);
}

//test
const arr = [1, 1, 1, 2, 3, 5, 8, 9, 5, 3, 2];
const arr1 = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN, { a: 1 }, { a: 1 }];
console.log(distinct6(arr1));

//补充lodash去重的实现方法：
//数组长度大于等于200时，创建Set去重
//长度小于200时，使用双重循环去重（并添加NaN去重）