/**
 * 每隔1s输出数组中的数字
 */
const arr = [1, 2, 3, 4, 5, 6];
arr.reduce((promise, curr) => {
    return promise.then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(curr);
                resolve();
            }, 1000);
        })
    })
}, Promise.resolve());
//简写
arr.reduce((p, n) => p.then(() => new Promise(r => setTimeout(() => r(console.log(n)), 1000))), Promise.resolve());

/**
 * 模拟一组请求reqArr，按顺序执行并输出结果数组
 */
/*
const reqArr = new Array(10).fill(0).map((item, index) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(index + '请求完成');
            resolve(index);
        }, Math.random() * 3000);
    })
});
*/
//mock
const reqArr = new Array(10).fill(0).map((item, index) => index);
const fetch = (item) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(item + '请求完成');
            resolve(item);
        }, Math.random() * 3000);
    });
};
//按顺序请求
const requestInOrder = reqArr => {
    const result = [];
    return reqArr.reduce((promise, currReq, currIndex) => {
        return promise.then(() => {
            return fetch(currReq);
        }).then(res => {
            result.push(res);
            return result;
        });
    }, Promise.resolve());
};
requestInOrder(reqArr).then(res => {
    console.log('done');
    console.log(res);
});


/**
 * 设置最大并发数limit，要求尽可能快的完成reqArr中的全部请求
 */
const requestAll = (reqArr, limit) => {
    const temp = reqArr.slice();
    const reqPool = temp.splice(0, limit).map((item, index) => {
        return fetch(item).then(res => ({
            poolIndex: index,
            reqIndex: res
        }));
    });
    return temp.reduce((promise, currReq, currIndex) => {
        console.log(currIndex + ' group');
        return promise.then(() => {
            return Promise.race(reqPool);
        }).then(({ poolIndex, reqIndex }) => {
            reqPool[poolIndex] = fetch(currReq).then(res => ({
                poolIndex,
                reqIndex: res
            }));
        }).catch(err => {
            console.log(err);
        })
    }, Promise.resolve()).then(() => {
        console.log('last group');
        return Promise.all(reqPool);
    });
};
requestAll(reqArr, 3).then(res => {
    console.log('全部请求完毕');
    console.log(res);
}).catch(err => {
    console.log(err);
});