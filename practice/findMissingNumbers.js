// Disappeared Numbers

//
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

var findDisappearedNumbers = function(nums) {
    var dict = {}
    var max = nums[0]
    var arr = []
    for(var x = 0; x<nums.length; x++){
        if(!(nums[x] in dict)){
            dict[nums[x]]= undefined;
        }
    }
    for(var x = 1; x<= nums.length; x++){
        if(!(x in dict)){
            arr.push(x);
        }
    }
    return arr
};
