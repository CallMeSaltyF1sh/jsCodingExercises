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