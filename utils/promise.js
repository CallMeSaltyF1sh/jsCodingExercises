const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

//基于A+规范
function Promise(fn) {
    let state = PENDING;
    let value = null;
    const callbacks = [];

    this.then = function (onFulFilled, onRejected) {
        return new Promise((resolve, reject) => {
            handle({
                onFulFilled,
                onRejected,
                resolve,
                reject
            });
        });
    };

    function handle(callback) {
        if (state === PENDING) {
            callbacks.push(callback);
            return;
        }
        /*
        if(state === FULFILLED) {
            if(!callback.onFulFilled) {
                callback.resolve(value);
                return;
            }
            const result = callback.onFulFilled(value);
            callback.resolve(result);
        }
        */
        const callbackfn = state === FULFILLED ? callback.onFulFilled : callback.onRejected;
        const next = state === FULFILLED ? callback.resolve : callback.reject;
        if (!callbackfn) {
            next(value);
            return;
        }
        let result;
        try {
            result = callbackfn(value);
        } catch (e) {
            callback.reject(e);
        }
        next(result);
    }

    function resolve(newValue) {
        setTimeout(() => {
            if (state !== PENDING) return;
            if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                const { then } = newValue;
                if (typeof then === 'function') {
                    then.call(newValue, resolve, reject);
                    return;
                }
            }
            state = FULFILLED;
            value = newValue;
            handleNext();
        }, 0);
    }

    function reject(error) {
        setTimeout(() => {
            if (state === PENDING) return;
            if (error && (typeof error === 'object' || typeof error === 'function')) {
                const { then } = error;
                if (typeof then === 'function') {
                    then.call(error, resolve, reject);
                    return;
                }
            }
            state = REJECTED;
            value = error;
            handleNext();
        }, 0);
    }

    function handleNext() {
        while (callbacks.length) {
            const f = callbacks.shift();
            handle(f);
        }
    }

    this.catch = function (onError) {
        this.then(null, onError);
    }

    this.finally = function (onDone) {
        this.then(onDone, onDone);
    }

    //实现Promise.resolve({...})
    //等价于new Promise(resolve => resolve({...}))
    //参数有四种情况：无参数、普通数据对象、Promise实例、thenable对象
    this.resolve = function (value) {
        if (value && value instanceof Promise) {
            return value;
        } else if (value && typeof value === 'object' && typeof value.then === 'function') {
            const { then } = value;
            return new Promise(resolve => {
                then(resolve);
            });
        } else if (value) {
            return new Promise(resolve => resolve(value));
        }
        return new Promise(resolve => resolve());
    }

    //实现Promise.reject({...})
    //等价于new Promise((resolve,reject) => reject({...}))
    this.reject = function (value) {
        return new Promise((resolve, reject) => {
            reject(value);
        });
    }

    //实现Promise.all([...])
    this.all = function (arr) {
        return new Promise((resolve, reject) => {
            if (arr.length === 0) return resolve([]);
            let cnt = arr.length;
            function res(index, value) {
                try {
                    if (value && (typeof value === 'object' || typeof value === 'function')) {
                        const { then } = value;
                        if (typeof then === 'function') {
                            then.call(value, val => {
                                res(index, val);
                            }, reject);
                            return;
                        }
                    }
                    arr[index] = value;
                    if (--cnt === 0) {
                        resolve(arr);
                    }
                } catch (e) {
                    reject(e);
                }
            }

            for (let i = 0, len = arr.length; i < len; i++) {
                res(i, arr[i]);
            }
        });
    }

    //实现Promise.race([...])
    this.race = function (arr) {
        return new Promise((resolve, reject) => {
            for (let i = 0, len = arr.length; i < len; i++) {
                arr[i].then(resolve, reject);
            }
        });
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

//test
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ test: 1 })
    }, 1000);
}).then(data => {
    console.log('result1:', data);
    return test();
}).then((data) => {
    console.log('result2:', data);
});

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ test: 2 });
        }, 2000)
    });
}