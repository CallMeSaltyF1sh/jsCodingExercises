/**
 * 常用正则
 */
//日期 yyyy-mm-dd
const dateReg = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
//手机号
const telReg = /^1[34578]\d{9}$/;
//邮箱
const emailReg = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

/**
 * 将浮点数左边的数每三位添加逗号
 */
function format(num) {
    return num && num.toString().replace(/(?!^)(?=(\d{3})+\.)/g, ',');
}
console.log(format(10000000000.10))

/**
 * 千位分隔符(有小数的话保留三位小数)
 */
function format2(num) {
    num = parseFloat(num.toFixed(3));
    let [n1, n2] = (num + '').split('.');
    n1 = n1.replace(/\d(?=(\d{3})+$)/g, '$&,');
    return n1 + (n2 ? ('.' + n2) : '');
}
console.log(format2(6666666666666.66666));

/**
 * 把短横线命名换成驼峰命名
 */
function convert(name) {
    return name.replace(/-\w/g, function(match) {
        return match.slice(1).toUpperCase();
    });
}
console.log(convert('this-is-a-test'));


/**
 * 日期转换举例
 */
function changeDateFormat(date) {
    return date.replace(/(\d+)-(\d+)-(\d+)/, '$1年$2月$3日');
}

/**
 * trim
 */
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, '');
}

/**
 * 提取url中的参数名、参数值
 */
function getUrlParamObj() {
    let obj = {};
    let params = window.location.search.substr(1);
    params.replace(/([^&=]+)=([^&=]*)/gi, function(rs, $1, $2) {
        obj[$1] = decodeURIComponent($2);
    });
    return obj;
}

/**
 * 解析出对象类型
 */
function getObjType(obj) {
    let res = Object.prototype.toString.call(obj);
    res = res.replace(/\[object\s(\w+)\]/, '$1');
    return res.toLowerCase();
}

/**
 * 手机号中间位转成*
 */
function telFormat(tel) {
    tel += '';
    return tel.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');
}