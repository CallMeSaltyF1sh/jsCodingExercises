/*
 * Problem desc:
 * 给出一个无重叠的，按照区间起始端点排序的区间列表。
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(newInterval.length === 0) return intervals;
    if(intervals.length === 0) return [newInterval];
    
    intervals.push(newInterval);
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