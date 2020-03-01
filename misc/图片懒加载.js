/**
 * 实现图片懒加载
 * html部分：
    <style>
    .img {
        width: 200px;
        height:200px;
        background-color: gray;
    }
    </style>
    <dic class='img'>
        <img class="pic" alt="loading" data-src="./pic.png">
    </div>
 */

//js部分
const imgs = document.getElementsByTagName('img');
//获取可视区高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight;
let cnt = 0;
function lazyload() {
    for (let i = cnt, len = imgs.length; i < len; i++) {
        //获取图片顶部距离可视区顶部的高度
        let distance = viewHeight - imgs[i].getBoundingClientRect().top;
        if (distance >= 0) {
            imgs[i].src = imgs[i].getAttribute('data-src');
            cnt = i + 1;
        }
    }
}
//加防抖节流
function throttle(fn, delay) {
    let prev = 0,
        timer = null;
    return function (...args) {
        let now = +new Date();
        if (now - prev >= delay) {
            fn.apply(this, args);
            prev = now;
        } else {
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
                prev = now;
            }, delay);
        }
    }
}
const handleScroll = throttle(lazyload, 500);
document.addEventListener('scroll', handleScroll);