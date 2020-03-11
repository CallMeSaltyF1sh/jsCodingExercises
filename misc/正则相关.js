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