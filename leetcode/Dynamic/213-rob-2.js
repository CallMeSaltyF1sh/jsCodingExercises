/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const len = nums.length;
    if (!len) return 0;

    let robFirstPrev = 0,
        robFirstCurr = nums[0],
        robLastPrev = 0,
        robLastCurr = 0;
    for (let i = 1; i < len - 1; i++) {
        let temp1 = robFirstCurr,
            temp2 = robLastCurr;
        robFirstCurr = Math.max(robFirstPrev + nums[i], robFirstCurr);
        robLastCurr = Math.max(robLastPrev + nums[i], robLastCurr);
        robFirstPrev = temp1;
        robLastPrev = temp2;
    }
    robLastCurr = Math.max(robLastPrev + nums[len - 1], robLastCurr);
    return Math.max(robFirstCurr, robLastCurr);
};