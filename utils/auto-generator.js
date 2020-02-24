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
            });
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


//异步Generator自动执行器
async function asyncRunner(asyncIterable, cnt = Infinity) {
    const result = [];
    const iterator = asyncIterable[Symbol.asyncIterator]();
    while(result.length < cnt) {
        const { value, done } = await iterator.next();
        if(done) break;
        result.push(value);
    }
    return result;
}

//test
async function fn() {
    async function* gen() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
    return await asyncRunner(gen());
}
fn().then(res => {
    console.log(res);
});