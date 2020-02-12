//防抖
function decounce(func, delay) {
    let timer;
    return function() {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, delay);
    };
}

//节流
//时间戳
function throttle0(func, delay) {
    let prevTime = new Date();
    return function() {
        let currTime = new Date();
        if(currTime - prevTime > delay) {
            func.apply(this, arguments);
            prevTime = new Date();
        }
    }
}
//定时器
function throttle1(func, delay) {
    let timer = null;
    return function() {
        const args = arguments;
        if(!timer) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}
//时间戳+定时器
function throttle2(func, delay) {
    let timer = null;
    let startTime = Date.now();
    return function() {
        let currTime = Date.now(),
            remaining = delay - (currTime - startTime);
        clearTimeout(timer);
        if(remaining <= 0) {
            func.apply(this, arguments);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);
        }
    }
}