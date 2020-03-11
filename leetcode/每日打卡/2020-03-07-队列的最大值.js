/**
 * Problem desc:
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的时间复杂度都是O(1)。
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 */

var MaxQueue = function() {
    this.queue = [];
    this.max_queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.max_queue.length ? this.max_queue[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);
    while(this.max_queue.length && this.max_queue[this.max_queue.length - 1] < value) {
        this.max_queue.pop();
    }
    this.max_queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length) {
        if(this.max_queue[0] === this.queue[0]) {
            this.max_queue.shift();
        }
        return this.queue.shift();
    }
    return -1;
};