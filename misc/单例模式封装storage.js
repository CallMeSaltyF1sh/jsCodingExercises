//1
class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    setItem(key, value) {
        return localStorage.setItem(key, value);
    }
}
const storage = Storage.getInstance();

//2
function Storage() { }
Storage.prototype.getItem = function (key) {
    return localStorage.getItem(key);
}
Storage.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value);
}

const StorageBuilder = (function () {
    let instance = null;
    return function () {
        if (!instance) {
            instance = new Storage();
        }
        return instance;
    }
})();
const s1 = StorageBuilder();
const s2 = StorageBuilder();
s1.setItem(1, '1');
console.log(s2.getItem(1));
