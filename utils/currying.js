/**
 * 函数柯里化
 */
function curry(fn, args) {
    return function () {
        let _args = [].slice.call(arguments);

        if (args !== undefined) {
            _args = args.concat(_args);
        }

        //fn.length是fn接收参数的个数，还不够的话继续递归
        if (_args.length < fn.length) {
            return curry(fn, _args);
        }

        //够了就传入fn调用
        return fn.apply(null, _args);
    }
}

//简化版
const currying = fn =>
    _curry = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...newArgs) => _curry(...args, ...newArgs);

//test
function sum(a, b, c) {
    console.log(a + b + c);
}
const fn = currying(sum);
fn(1)(2)(3);