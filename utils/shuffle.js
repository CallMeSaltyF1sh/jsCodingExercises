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
console.log(shuffle0([1,2,3,4,5,6,7,8,9,10]));

//Fisher-Yates
function shuffle1(arr = []) {
    let i = arr.length;
    while(i > 1) {
        let index = Math.floor(Math.random() * i--);
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
}
console.log(shuffle1([1,2,3,4,5,6,7,8,9,10]));