function memorizeFuntion(func, cache={}) {
    return function() {
        const key = arguments[0];
        if(cache[key]) {
            return cache[key];
        } else {
            const val = func.apply(null, arguments);
            cache[key] = val;
            return val;
        }
    };
}

//test
const fibonacci = memorizeFuntion(function(n) {
    return (n===0 || n===1) ? n : fibonacci(n-1) + fibonacci(n-2);
});

console.log(fibonacci(100));
console.log(fibonacci(100));