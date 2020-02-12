function flat0(arr = [], result = []) {
    arr.forEach(item => {
        //或者用Array.isArray()判断
        if(Object.prototype.toString.call(item) === '[Object Array]') {
            result = result.concat(flat0(item, []));
        } else {
            result.push(item);
        }
    });
    return result;
}

function flat1(arr) {
    return arr.reduce((result, curr) => (
        result.concat(Array.isArray(curr) ? flat1(curr) : curr)
    ), []);
}

function flat2(arr) {
    while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr);
    }
    return arr;
}

function flat3(arr) {
    return arr.toString().split(',').map(item => Number(item));  //或者写item => +item
}

function flat4(arr) {
    return arr.join(',').split(',').map(item => Number(item));
}