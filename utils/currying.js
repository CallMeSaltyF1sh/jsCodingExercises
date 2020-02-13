/**
 * 函数柯里化
 */
function progressCurrying(fn, args) {
    return function() {
        let _args = [].slice.call(arguments);

        if(args !== undefined) {
            _args = _args.concat(args);
        }

        if(_args.length < fn.length) {
            return progressCurrying(fn, _args);
        }

        return fn.apply(null, _args);
    }
}

//简化版
const currying = fn => 
    _curry = (...args) => 
        args.length >= fn.length
        ? fn(...args)
        : (...newArgs) => _curry(...args, ...newArgs);