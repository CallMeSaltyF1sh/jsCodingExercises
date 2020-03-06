/**
 * 实现compose(a,b,c,d) => a(b(c(d(...args))))
 */
function compose(...fn) {
    return function(...args) {
        let i = fn.length - 1,
            result = fn[i](...args);
        while(i--) {
            result = fn[i](result);
        }
        return result;
    }
}

//test
function a(x,y) {
    return x + y;
}
function b(x) {
    return 10 * x;
}
function c(x) {
    return x + 1;
}
const test = compose(c, b, a);
console.log(test(1,2));   // 31