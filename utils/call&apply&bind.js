//es5版
Function.prototype.call1 = function(context) {
    context = context || window;
    context.fn = this;
    var args = [];
    for(var i=1; i<arguments.length; i++) {
        args.push("arguments["+i+"]");
    }
    args = args.join(",");
    var result = eval("context.fn("+args+")");
    delete context.fn;
    return result;
}
//es6版
//但是这个写法用babel转es5的话还是会调用call
Function.prototype.call2 = function(context, ...args) {
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

//es5版
Function.prototype.apply1 = function(context, arr) {
    context = context || window;
    context.fn = this;
    var args = [];
    var params = arr || [];
    for(var i=0; i<params.length; i++) {
        args.push("params["+i+"]");
    }
    args = args.join(",");
    var result = eval("context.fn("+args+")");
    delete context.fn;
    return result;
}
//es6版
Function.prototype.apply2 = function(context, arr = []) {
    context = context || window;
    context.fn = this;
    const result = context.fn(...arr);
    delete context.fn;
    return result;
}

//es5
Function.prototype.bind1 = function(context) {
    var _this = this;
    var argsParent = Array.prototype.slice.call(arguments, 1);
    return function() {
        var args = argsParent.concat(Array.prototype.slice.call(arguments));
        _this.apply(context, args);
    }
}
//es6
Function.prototype.bind2 = function(context, ...args) {
    const _this = this;

    return function() {
        _this.call(context, ...args, ...arguments);
    }
}
//不使用call或apply
Function.prototype.bind3 = function(context, ...args) {
    context = context || window;
    context.fn = this;
    return function() {
        context.fn(...args, ...arguments);
        delete context.fn;
    }
}

//test
function f(a, b) {
    console.log(a,b)
    console.log('this', this)
}
var obj = {name: 'nancy'}
f.bind3(obj, 'a')('b')