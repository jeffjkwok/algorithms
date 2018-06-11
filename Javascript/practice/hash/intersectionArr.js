// Intersection of Array I
//
// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
// Note:
// Each element in the result must be unique.
// The result can be in any order.

var intersection = function(nums1, nums2) {
    var hash = {};
    var arr = [];
    for(var idx=0 ;idx<nums1.length; idx++){
        if(nums1[idx] in hash){
            hash[nums1[idx]]++
        } else {
            hash[nums1[idx]] = 1
        }
    }
    for(var idx=0;idx<nums2.length ;idx++){
        if(nums2[idx] in hash){
            arr.push(nums2[idx])
        }
    }
    arr = new Set(arr)
    arr = Array.from(arr)
    return arr
};


// Intersection of Array II

// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
//
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


var intersect = function(nums1, nums2) {
    var hash = {};
    var arr = [];
    for(var idx = 0; idx<nums1.length; idx++){
        if(nums1[idx] in hash ){
            hash[nums1[idx]] ++;
        } else {
            hash[nums1[idx]] = 1;
        }
    }
    for(var idx = 0; idx<nums2.length; idx++){
        if(nums2[idx] in hash){
            hash[nums2[idx]]--
            if(hash[nums2[idx]]>=0){
                arr.push(nums2[idx])
            }
        }
    }
    console.log(arr)
    return arr
};
