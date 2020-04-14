/**
 * 编写一个程序，找出第 n 个丑数。
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 */

/**
 * @param {number} n
 * @return {number}
 */
//1
var nthUglyNumber = function (n) {
    let arr = [1],
        p2 = 0,
        p3 = 0,
        p5 = 0;
    while (arr.length < n) {
        let min = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5);
        switch (min) {
            case arr[p2] * 2:
                p2++;
                break;
            case arr[p3] * 3:
                p3++;
                break;
            case arr[p5] * 5:
                p5++;
                break;
        }
        if (!arr.includes(min)) arr.push(min);
    }
    return arr[n - 1];
};

//2
var nthUglyNumber = function (n) {
    let arr = new Array(n),
        p2 = 0, p3 = 0, p5 = 0;
    arr[0] = 1;
    for (let i = 1; i < n; i++) {
        let min = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5);
        arr[i] = min;
        if (min === arr[p2] * 2) p2++;
        if (min === arr[p3] * 3) p3++;
        if (min === arr[p5] * 5) p5++;
    }
    return arr[n - 1];
}