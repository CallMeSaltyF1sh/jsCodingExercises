/**
 * 用两个栈实现队列
 */
let Queue = function() {
    this.inputStack = [];
    this.outputStack = [];
};

Queue.prototype.enQueue = function(element) {
    this.inputStack.push(element);
};

Queue.prototype.deQueue = function() {
    while(this.inputStack.length) {
        let element = this.inputStack.pop();
        this.outputStack.push(element);
    }
    if(this.outputStack.length) {
        return this.outputStack.pop();
    } else {
        return null;
    }
};