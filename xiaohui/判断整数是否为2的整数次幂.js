/**
 * 2次幂整数减一后对应的二进制全部变成1
 * 所以原数和减一后的数按位与是0
 */
function isPowerOf2(num) {
    return (num & num - 1) === 0;
}