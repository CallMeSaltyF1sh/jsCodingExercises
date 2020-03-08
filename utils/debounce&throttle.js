//防抖
//任务频繁触发的情况下，只有触发的间隔超过指定间隔才会被执行
function decounce0(func, delay = 300) {
    let timer;
    return function (...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    };
}

//添加是否立即执行的选项
function debounce1(func, delay = 300, immediate = true) {
    let timer, result;
    return function (...args) {
        timer && clearTimeout(timer);
        if (immediate) {
            if (!timer) result = func.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        } else {
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        }
        return result;
    }
}

//添加cancel
function debounce2(func, delay = 300, immediate = true) {
    let timer, result;
    const debounce = function (...args) {
        timer && clearTimeout(timer);
        if (immediate) {
            if (!timer) result = func.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        } else {
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        }
        return result;
    };
    debounce.cancel = function () {
        clearTimeout(timer);
        timer = null;
    };
    return debounce;
}


//节流
//时间戳
function throttle0(func, delay = 300) {
    let prevTime = +new Date();
    return function (...args) {
        let currTime = +new Date();
        if (currTime - prevTime > delay) {
            func.apply(this, args);
            prevTime = currTime;
        }
    }
}
//定时器
function throttle1(func, delay = 300) {
    let timer;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}


//定时器+时间戳
function throttle2(func, threshhold = 300) {
    let prevTime,
        timer;
    return function () {
        let currTime = +new Date();
        if (prevTime && currTime < prevTime + threshhold) {
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                prevTime = currTime;
                func.apply(this, arguments);
            }, threshhold);
        } else {
            prevTime = currTime;
            func.apply(this, arguments);
        }
    };
}

//定时器+时间戳（添加leading和trailing选项，这两个不能同时为false）
function throttle3(func, delay=300, { leading=true, trailing=true }) {
    let prevTime = +new Date(),
        timer;
    const later = (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(this, args);
        }, delay);
    };
    return function(...args) {
        let currTime = +new Date();
        if(!leading) return later(args);  //由于leading是false，trailing强制是true
        if(currTime - prevTime > delay) {
            func.apply(this, args);
            prevTime = currTime;
        } else if(trailing) {
            later(args);
        }
    }
}

//进一步完善
function throttle4(func, delay=300, { leading=true, trailing=true }) {
    let prev = leading ? 0 : +new Date(),
        remaining = 0,
        timer;
    const later = (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
            timer = null;
            prev = +new Date();
        }, delay);   //这里如果用remaining的话就算leading是false，在超过delay以后触发还是会立即调用
    };
    const throttle = (...args) => {
        let curr = +new Date();
        remaining = delay - (curr - prev);
        if(!leading) return later(args);
        if(remaining <= 0) {
            prev = curr;
            func.apply(this, args);
        } else if(trailing) {
            later(args);
        }
    };
    throttle.cancel = function() {
        clearTimeout(timer);
        timer = null;
        prev = 0;
    }
    return throttle;
}