/**
 * 基于数据劫持实现双向绑定
 */
const input = document.getElementById('input');
const span = document.getElementById('span');
const store = {
    content: ''
};
//视图层改变映射到数据层
input.addEventListener('blur', function (e) {
    store.content = e.target.value;
});

//数据层改变映射到视图层
//方式一：Object.defineProperty
Object.defineProperty(store, 'content', {
    enumerable: true,
    configurable: true,
    writable: true,
    set(newValue) {
        input.value = newValue;
        span.innerHTML = newValue;
    }
});

//方式二：Proxy
const proxy = new Proxy(store, {
    set(target, key, value, receiver) {
        if (key === 'content') {
            target[key] = value;
            input.value = value;
            span.innerHTML = value;
        }
        return Reflect.set(target, key, value, receiver);
    },
    get(target, key, receiver) {
        return Reflect(target, key, receiver);
    }
});

//两者的区别：
//Object.defineProperty只能劫持对象的的属性，需要遍历目标对象的每个属性进行拦截
//Proxy可以直接监听对象，有多种拦截方法，返回新对象