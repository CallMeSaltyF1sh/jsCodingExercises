/**
 * Problem desc:
 * 排排坐，分糖果。
 * 我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。
 * 给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。
 * 然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。
 * 重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。
 * 返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。
 */

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
//第一版
var distributeCandies = function (candies, num_people) {
    const record = [];
    let i = 0,
        num = 1,
        flag = true;
    while (candies) {
        if (flag) {
            record.push(num);
        } else {
            record[i] += num;
        }
        candies -= num;
        if (candies < num + 1) {
            num = candies;
        } else {
            num++;
        }
        if (i === num_people - 1) {
            if (flag) flag = false;
            i = 0;
        } else {
            i++;
        }
    }
    return record.length < num_people ? record.concat(new Array(num_people - record.length).fill(0)) : record;
};

//去掉冗余
var distributeCandies = function (candies, num_people) {
    const record = new Array(num_people).fill(0);
    let i = 0,
        num = 1;
    while (candies) {
        record[i] += num;
        candies -= num;
        if (candies < num + 1) {
            num = candies;
        } else {
            num++;
        }
        i = (i === num_people - 1) ? 0 : i + 1;
    }
    return record;
};