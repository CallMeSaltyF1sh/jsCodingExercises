/**
 * 函数柯里化
 */
function currify(fn, args) {
    return function () {
        let _args = [].slice.call(arguments);

        if (args !== undefined) {
            _args = args.concat(_args);
        }

        //fn.length是fn接收参数的个数，还不够的话继续递归
        if (_args.length < fn.length) {
            return currify(fn, _args);
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


//带占位符的
function curry(fn, argLength = fn.length, holder = '_') {
    return _curry(fn, argLength, holder, [], []);
}
function _curry(fn, length, holder, args = [], holderPos = []) {
    return function(..._args) {
        let pos = holderPos.slice();   //之前的占位符下标

        _args.forEach(arg => {
            if(arg !== holder) {
                if(holderPos.length) {
                    const p = holderPos.shift();
                    pos.shift();
                    args[p] = arg;
                } else {
                    args.push(arg);
                }
            } else {
                args.push(arg);
                pos.push(args.length - 1);
            }
        });

        if(args.length >= length && args.slice(0, length).every(i => i !== holder)) {
            return fn.apply(null, args);
        } else {
            return _curry(fn, length, holder, args, pos);
        }
    }
}

//test
const fn1 = function(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}
const _fn = curry(fn1);
_fn(1, 2, 3, 4, 5);
_fn('_', 2, 3, 4, 5)(1);
_fn(1, '_', '_', 4, 5)(2, 3);
_fn(1, '_', 3)('_', 2,'_')(4)(5);