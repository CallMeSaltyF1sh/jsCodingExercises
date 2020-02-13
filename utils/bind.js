function bind(context) {
    const _this = this;
    let args = Array.prototype.slice.call(arguments, 1);

    return function() {
        return _this.apply(context, args);
    }
}