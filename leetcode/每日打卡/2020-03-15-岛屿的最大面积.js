/**
 * Problem desc:
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const xMax = grid.length,
        yMax = grid[0].length;
    let pos = [],
        cnt = temp = 0,
        x, y;

    function search(x, y) {
        temp++;
        if (x - 1 >= 0 && grid[x - 1][y] === 1) {
            pos.push([x - 1, y]);
            grid[x - 1][y] = 0;
        }
        if (x + 1 < xMax && grid[x + 1][y] === 1) {
            pos.push([x + 1, y]);
            grid[x + 1][y] = 0;
        }
        if (y - 1 >= 0 && grid[x][y - 1] === 1) {
            pos.push([x, y - 1]);
            grid[x][y - 1] = 0;
        }
        if (y + 1 < yMax && grid[x][y + 1] === 1) {
            pos.push([x, y + 1]);
            grid[x][y + 1] = 0;
        }
    }

    for (let i = 0; i < xMax; i++) {
        for (let j = 0; j < yMax; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                search(i, j);
                while (pos.length) {
                    [x, y] = pos.pop();
                    search(x, y);
                }
                cnt = cnt > temp ? cnt : temp;
                temp = 0;
            }
        }
    }

    return cnt;
};
