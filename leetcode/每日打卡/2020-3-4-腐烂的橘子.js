/**
 * Problem desc:
 * 在给定的网格中，每个单元格可以有以下三个值之一：
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 每分钟任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
 * 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数；如果不可能，返回 -1。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
//第一版：用很笨的方法实现
var orangesRotting = function (grid) {
    let rottenOranges = [],
        normalOranges = [],
        cnt = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] === 2) {
                rottenOranges.push([x, y].toString());
            } else if (grid[x][y] === 1) {
                normalOranges.push([x, y]);
            }
        }
    }
    if (normalOranges.length === 0) return 0;

    function rot(normalOranges) {
        let flag = false,
            temp = [];
        for (let i = 0, len = normalOranges.length; i < len; i++) {
            let [x, y] = normalOranges[i];
            if (rottenOranges.includes([x, y + 1].toString()) || rottenOranges.includes([x, y - 1].toString()) || rottenOranges.includes([x - 1, y].toString()) || rottenOranges.includes([x + 1, y].toString())) {
                if (!flag) {
                    cnt++;
                    flag = true;
                }
                temp.push([x, y].toString());
                normalOranges.splice(i, 1);
                i--;
                len--;
            }
        }
        if (normalOranges.length === 0) return;
        if (flag) {
            rottenOranges.push(...temp);
            rot(normalOranges);
        } else {
            cnt = -1;
            return;
        }
    }
    rot(normalOranges);

    return cnt;
};


//改成while循环并把rottenOranges换成上次新增腐烂的橘子不包括之前的
//但内存还是占用大，感觉是因为rottenOranges和temp
//偷懒用toString和includes做判断也是个坑
var orangesRotting = function (grid) {
    let rottenOranges = [],
        normalOranges = [],
        cnt = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] === 2) {
                rottenOranges.push([x, y].toString());
            } else if (grid[x][y] === 1) {
                normalOranges.push([x, y]);
            }
        }
    }

    let flag = false,
        temp;
    while (normalOranges.length) {
        temp = [];
        for (let i = 0, len = normalOranges.length; i < len; i++) {
            let [x, y] = normalOranges[i];
            if (rottenOranges.includes([x, y + 1].toString()) || rottenOranges.includes([x, y - 1].toString()) || rottenOranges.includes([x - 1, y].toString()) || rottenOranges.includes([x + 1, y].toString())) {
                if (!flag) {
                    cnt++;
                    flag = true;
                }
                temp.push([x, y].toString());
                normalOranges.splice(i, 1);
                i--;
                len--;
            }
        }
        //if(normalOranges.length === 0) break;
        if (flag) {
            rottenOranges = temp;
        } else {
            cnt = -1;
            break;
        }
    }

    return cnt;
};


//彻底改掉
var orangesRotting = function (grid) {
    let rottenOranges = [],
        normal = 0,
        cnt = 0,
        a, b, m, n;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] === 2) {
                rottenOranges.push([x, y]);
            } else if (grid[x][y] === 1) {
                normal++;
            }
        }
    }

    let temp;
    const x = [-1, 0, 1, 0],
        y = [0, 1, 0, -1];
    while (normal && rottenOranges.length) {
        temp = [];
        while (rottenOranges.length) {
            [m, n] = rottenOranges.shift();
            for (let i = 0; i < x.length; i++) {
                a = m + x[i];
                b = n + y[i];
                if (a >= 0 && a < grid.length && b >= 0 && b < grid[0].length) {
                    if (grid[a][b] === 1) {
                        grid[a][b] = 2;
                        normal--;
                        temp.push([a, b]);
                    }
                }
            }
        }
        rottenOranges = temp;
        cnt++;
    }

    return normal ? -1 : cnt;
}
