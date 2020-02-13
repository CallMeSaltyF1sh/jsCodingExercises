//轮循
function poll(fn, timeout = 2000, interval = 100) {
    let endTime = Number(new Date()) + timeout;

    const check = function(resolve, reject) {
        let result = fn();
        if(result) {
            resolve(result);
        }
    }
}