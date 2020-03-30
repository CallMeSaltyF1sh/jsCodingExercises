/**
 * 要求：
 * entry: 
 * a: {
        b: {
            c:{
                dd:'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
    output:
    {
        'a.b.c.dd': 'abcdd',
        'a.d.xx': 'adxx',
        'a.e': 'ae'
    }
 */

function convert(obj) {
    let result = {},
        name;
    function traverse(o, nameArr) {
        for(let key in o) {
            if(typeof o[key] === 'object') traverse(o[key], [...nameArr, key]);
            else {
                nameArr.push(o[key]);
                name = nameArr.join('.');
                result[name] = o[key];
            }
        }
    }
    traverse(obj, []);
    return result;
}
//test
const entry = {
    a: {
        b: {
            c:{
                dd:'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
};
console.log(convert(entry));