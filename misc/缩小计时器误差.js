const interval = 1000;
let leftTime = 60000,   //剩余时间
    cnt = 0,
    startTime = +new Date(),
    timer = null;

function countDown() {
    cnt++;
    let offset = +new Date() - (startTime + cnt * interval),
        next = interval - offset < 0 ? 0 : interval - offset;
    if (cnt < leftTime / 1000) {
        timer = setTimeout(countDown, next);
    } else {
        clearTimeout(timer);
        timer = null;
    }
}

if (leftTime > 0) {
    timer = setTimeout(countDown, interval);
}