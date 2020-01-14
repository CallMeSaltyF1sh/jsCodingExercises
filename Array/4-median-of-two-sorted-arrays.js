/**
 * Problem desc:
 * 给定两个大小为m和n的有序数组nums1和nums2，找出这两个有序数组的中位数。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//常规版
var findMedianSortedArrays = function(nums1, nums2) {
    var i=0,j=0,k=0;
    var nums3 = [];
    while(nums1[i]!=null && nums2[j]!=null){
        if(nums1[i]>nums2[j]){
            nums3[k++] = nums2[j++];
        }else{
            nums3[k++] = nums1[i++];
        }
    }
    while(nums1[i]) nums3[k++] = nums1[i++];
    while(nums2[j]) nums3[k++] = nums2[j++];
    
    if(k%2==0){
        return (nums3[k/2-1]+nums3[k/2])/2;
    }else{
        return nums3[Math.floor(k/2)];
    }   
};

//简洁版
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2).sort((a, b) => a - b);
    let len = nums1.length;
    return len % 2 === 1 ? nums1[parseInt(len / 2)] : (nums1[len / 2] + nums1[len / 2 - 1]) / 2;
}
