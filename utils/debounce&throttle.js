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
    let timer;
    return function (...args) {
        timer && clearTimeout(timer);
        if (immediate) {
            if (!timer) func.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        } else {
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        }
    }
}

//添加cancel
function debounce2(func, delay = 300, immediate = true) {
    let timer;
    const debounce = function (...args) {
        timer && clearTimeout(timer);
        if (immediate) {
            if (!timer) func.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        } else {
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        }
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
    let prevTime = new Date();
    return function (...args) {
        let currTime = new Date();
        if (currTime - prevTime > delay) {
            func.apply(this, args);
            prevTime = new Date();
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
//时间戳+定时器
function throttle2(func, delay = 300) {
    let timer = null,
        startTime = Date.now();
    return function (...args) {
        let currTime = Date.now(),
            remaining = delay - (currTime - startTime);
        if (timer) {
            clearTimeout(timer);
        }
        if (remaining <= 0) {
            func.apply(this, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);
        }
    }
}

//另一种
function throttle3(func, threshhold = 300) {
    let prevTime,
        timer;
    return function () {
        let currTime = +new Date;   //神奇的写法
        if (prevTime && currTime < prevTime + threshhold) {
            clearTimeout(timer);
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

//添加leading和trailing选项
function throttle4(func, delay=300, { leading=true, trailing=true }) {
    let prevTime = new Date(),
        timer;
    const later = (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(this, args);
        }, delay);
    };
    return function(...args) {
        let currTime = new Date();
        if(!leading) return later(args);
        if(currTime - prevTime > wait) {
            func.apply(this, args);
            prevTime = currTime;
        } else if(trailing) {
            later(args);
        }
    }
}