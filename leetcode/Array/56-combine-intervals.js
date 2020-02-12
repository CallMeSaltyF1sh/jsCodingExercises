/*
 * Problem desc:
 * 给出一个区间的集合，请合并所有重叠的区间。
 */
 
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];
    else if(intervals.length === 1) return intervals;
    
    intervals.sort((a, b) => (a[0] - b[0]));
    
    let result = [];
    
    let last = intervals.reduce((a, b) => {
        if (b[0] <= a[1]) {
            if(b[1] >= a[1]) return [a[0], b[1]];
            else return a;
        } else {
            result.push(a);
            return b;
        }
    });
    
    result.push(last);
    
    return result;
};
