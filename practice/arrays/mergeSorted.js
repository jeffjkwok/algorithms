// Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
//


var merge = function(nums1, m, nums2, n) {
    for(var idx = nums1.length-1; idx > m-1 ; idx--){
        nums1.pop()
    }
    for(var idx = 0; idx <= n-1; idx++){
        nums1.push(nums2[idx])
    }
    nums1.sort(function(a,b){return a - b})
    console.log(nums1)
};

merge([1,2,3],2,[1],1)
