//简单版
function runner(gen) {
    const g = gen();

    function next(data) {
        const result = g.next();
        if(result.done) return result.value;
        next(data);
    }

    next();
}

//async内部自动执行器
function spawn(gen) {
    return new Promise((resolve, reject) => {
        const g = gen();
        function step(next) {
            let data;
            try {
                data = next();
            } catch(e) {
                return reject(e);
            }
            if(data.done) {
                return resolve(data.value);
            }
            Promise.resolve(data.value).then(val => {
                step(() => g.next(val));
            }, err => {
                step(() => g.throw(err));
            })
        }
        step(() => g.next());
    });
}

//test
function* testGen() {
    yield 'hello';
    yield 'world';
    return 'end';
}
runner(testGen);