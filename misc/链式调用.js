/**
 * 实现：
 * LazyMan('emm').eat('apple').sleep(2).eat('banana').sleepFirst(3).eat('orange');
 * 打印：
 * (隔3s)
 * sleep 3s
   I am emm
   eat apple
   (隔2s)
   sleep 2s
   eat banana
   eat orange
 */

class LazyManClass {
    constructor(name) {
        this.todos = [this.introduce.bind(this, name)];
        setTimeout(() => {
            this.next();
        });
    }
    introduce(name) {
        console.log(`I am ${name}`);
        this.next();
    }
    sleepFirst(time) {
        let fn = () => {
            setTimeout(() => {
                console.log(`sleep ${time}s`);
                this.next();
            }, time*1000);
        }
        this.todos.unshift(fn);
        return this;
    }
    sleep(time) {
        let fn = () => {
            setTimeout(() => {
                console.log(`sleep ${time}s`);
                this.next();
            }, time*1000);
        }
        this.todos.push(fn);
        return this;
    }
    eat(food) {
        let fn = () => {
            console.log(`eat ${food}`);
            this.next();
        }
        this.todos.push(fn);
        return this;
    }
    next() {
        let fn = this.todos.shift();
        fn && fn();
    }
}
function LazyMan(name) {
    return new LazyManClass(name);
}

LazyMan('emm').eat('apple').sleep(2).eat('banana').sleepFirst(3).eat('orange');