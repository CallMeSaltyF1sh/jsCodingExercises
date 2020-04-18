/**
 * 找出一个正整数所包含数字的所有组合中第一个大于原数的那个
 * 先从后往前找到逆序部分，在逆序部分中取比逆序部分前一个数大的最小数并交换位置，然后把逆序部分升序排列
 */
function findNumber(num) {
    if(num < 10) return null;
    let arr = (num+'').split(''),
        len = arr.length,
        i = len - 1;
    for(; i > 0; i--) {
        if(arr[i] > arr[i-1]) break;
    }
    if(!i) return null;
    let temp = arr[i-1];
    for(let j=len-1; j > 0; j--) {
        if(temp < arr[j]) {
            [arr[i-1], arr[j]] = [arr[j], arr[i-1]];
            break;
        }
    }
    arr = arr.slice(0, i).concat(arr.slice(i).sort());
    return Number(arr.join(''));
}

console.log(findNumber(12365));