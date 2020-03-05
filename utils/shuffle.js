/**
 * 数组乱序
 */
function shuffle0(arr = []) {
    let newArr = arr.map(item => ({ val: item, order: Math.random() }));
    newArr.sort((a, b) => a.order - b.order);
    return newArr.reduce((result, curr) => {
        return result.concat(curr.val);
    }, []);
}

//随机挑一个加到新数组
function shuffle1(arr = []) {
    const res = [];
    while (arr.length) {
        let index = Math.floor(Math.random() * arr.length);
        res.push(arr[index]);
        arr.splice(index, 1);
    }
    return res;
}

//Fisher-Yates
function shuffle2(arr = []) {
    let i = arr.length;
    while (i > 1) {
        let index = Math.floor(Math.random() * i--);
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
}

console.log(shuffle2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));