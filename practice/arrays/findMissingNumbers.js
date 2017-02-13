// Disappeared Numbers

//
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//

var findDisappearedNumbers = function(nums) {
    var mySet = new Set();
    var arr = [];
    for(var idx = 0; idx<nums.length; idx++){
        if(!mySet.has(nums[idx])){
            mySet.add(nums[idx]);
        }
    }
    for(var idx = 1; idx<= nums.length; idx++){
        if(!mySet.has(idx)){
            arr.push(idx);
        }
    }
    return arr
};
