/**
 * Problem desc:
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 然后需要从左往右，从上到下逐行读取，输出一个新的字符串。
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 
 //方法一：Z字形存入二维数组然后按行读取
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    
    let row = 0,
        col = 0;
    let arr = [];
    let str = '';
    
    for(let m = 0; m < numRows; m++){
        arr[m] = [];
    }
    
    for(let c of s) {
        arr[row][col] = c;
        if(col % (numRows-1) === 0 && row !== (numRows-1)) {
            row ++;
        } else {
            row --;
            col ++;
        }
    }
    
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < col+1; j++){
            if(arr[i][j]) str = str.concat(arr[i][j])
        }
    }
    
    return str;
};

//方法二（更优）：生成字符串数组，每行为一个字符串，最后拼接输出
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    
    let arr = [],
        row = 0,
        add = true;
    
    for (let c of s) {
        arr[row] = arr[row] ? arr[row] + c : c;
        //判断接下来行号加还是减
        if (row === 0) {
            add = true;
        } else if (row === numRows - 1) {
            add = false;
        }
        row = add ? row + 1 : row - 1;
    }
    
    return arr.join('');
};
