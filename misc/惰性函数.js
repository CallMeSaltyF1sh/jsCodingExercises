/**
 * 为了解决每次调用某个函数都要进行判断的问题
 * 可以在判断之后重新对函数赋值或者用闭包实现
 */
//eg:
function addEvent(element, type, handler) {
    if (window.addEventListener) {
        addEvent = function (element, type, handler) {
            element.addEventListener(type, handler, false);
        }
    } else if (window.attachEvent) {
        addEvent = function (element, type, handler) {
            element.attachEvent('on' + type, handler);
        }
    }
}

//或者用闭包
var addEvent = (function () {
    if (window.addEventListener) {
        return function (element, type, handler) {
            element.addEventListener(type, handler, false);
        }
    } else if (window.attachEvent) {
        return function (element, type, handler) {
            element.attachEvent('on' + type, handler);
        }
    }
})();