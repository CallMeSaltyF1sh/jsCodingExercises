/**
 * 实现：
 * add(1); // 1
 * add(1)(2);  // 3
 * add(1)(2)(3);  // 6
 */
//1
function add(a) {
    function _add(b) {
        a += b;
        return _add;
    }
    _add.toString = function () {
        return a;
    }
    return _add;
}

//2
function curryingAdd() {
    let _args = Array.prototype.slice.call(arguments);

    let _adder = function () {
        _args.push(...arguments);
        return _adder;
    }

    _adder.toString = function () {
        return _args.reduce((a, b) => a + b);
    }
    return _adder;
}


//补充
/**
 * 实现sum函数满足：
 * sum(1,2,3).valueOf()   // 6
 * sum(1,2)(3).valueOf()   // 6
 * sum(1)(2,3)(4).valueOf()   // 10
 * sum(1)(2,3,4).valueOf()   // 10
 * sum(1)(2)(3)(4).valueOf()   // 10
 */
function sum(...args) {
    function _sum(..._args) {
        if (_args.length !== 0) {
            _sum.a += _args.reduce((a, b) => a + b, 0);
        }
        return _sum;
    }
    _sum.a = args.length > 0 ? args.reduce((a, b) => a + b, 0) : 0;
    _sum.valueOf = function () {
        console.log(_sum.a)
    }
    return _sum;
}
sum(1, 2)(3, 4, 5)(5)(5).valueOf();   // 25