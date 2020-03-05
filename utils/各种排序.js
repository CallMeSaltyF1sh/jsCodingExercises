//冒泡排序 最佳O(n);最差O(n2)
function bubble(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

//优化版冒泡
function improvedBubble(arr) {
    let i = arr.length,
        pos;
    while (i) {
        pos = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                pos = j;
            }
        }
        i = pos;
    }
    return arr;
}

//选择排序 O(n2)稳定
function select(arr) {
    let min = 0;  //记录每轮最小值下标
    for (let i = 0, len = arr.length; i < len; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

//插入排序 最佳O(n);最差O(n2)
//每轮从后往前遍历当前位置前面的序列，找到第一个大于前一位的位置放下，否则一直向前交换
function insert(arr) {
    let j, temp;
    for (let i = 1, len = arr.length; i < len; i++) {
        temp = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

//希尔排序 O(nlog2n)
//对数组进行等间隔分组处理，在每一组中做插入排序
function shell(arr) {
    let j, temp;
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        //这里和插入排序差不多，把步长改成gap就行了
        for (let i = gap, len = arr.length; i < len; i++) {
            temp = arr[i];
            for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

//归并排序 最佳O(n);最差O(nlogn)
//将数组反复二分直到分成单个元素，然后再两两合并，合并的时候进行排序
function mergeSort(arr) {
    const len = arr.length;
    if (len === 1) return arr;  //已经拆成单个元素了，返回

    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));  //归并
}
function merge(left, right) {
    const res = [];
    let i = 0,
        j = 0,
        k = 0;
    while (left[i] && right[j]) {
        if (left[i] < right[j]) {
            res[k++] = left[i++];
        } else {
            res[k++] = right[j++];
        }
    }
    while (left[i]) {
        res[k++] = left[i++];
    }
    while (right[j]) {
        res[k++] = right[j++];
    }
    return res;
}

//快速排序 最佳O(nlogn);最差O(n2)
//从数组中挑一个作为基准值，遍历数组把比基准小的放左边，比基准大的放右边
//然后继续对分出来的左右两部分进行如上操作
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2),
        mid = arr[midIndex],
        left = [],
        right = [];
    arr.splice(midIndex, 1);
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] < mid) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat(mid, quickSort(right));
}

//快排精简版
function quick(arr) {
    if (arr.length <= 1) return arr;
    return [
        ...quick(arr.slice(1).filter(item => item < arr[0])),
        arr[0],
        ...quick(arr.slice(1).filter(item => item >= arr[0]))
    ];
}

//堆排序 O(nlogn)稳定
//将初始数组构建成大顶堆（初始无序区），每次把最大的元素交换到顶部（即arr[0]）
//然后把堆顶元素与无序区最后一个元素交换值，交换以后最后一个元素进入有序区（即不再参与排序）
//然后再重新构建大顶堆，直到所有元素都进入有序区
function heapSort(arr) {
    let size = arr.length;
    //构建初始无序区
    for (let i = Math.floor(size / 2); i >= 0; i--) {
        intoHeap(arr, i, size);
    }
    //堆排序
    for (let i = size - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        intoHeap(arr, 0, --size);
    }
    return arr;
}
function intoHeap(arr, index, size) {
    let left = 2 * index + 1,
        right = 2 * index + 2,
        max = index;
    if (left < size && arr[left] > arr[index]) {
        max = left;
    }
    if (right < size && arr[right] > arr[max]) {
        max = right;
    }
    if (max !== index) {
        [arr[index], arr[max]] = [arr[max], arr[index]];
        intoHeap(arr, max, size);
    }
}

console.log(heapSort([1, 3, 2, 4, 8, 5, 6, 10, 9]));