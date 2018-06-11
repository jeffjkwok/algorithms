// ContainsDupe

// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
    var mySet = new Set();
    for(var idx = 0 ; idx < nums.length; idx++){
        if(!mySet.has(nums[idx])){
            mySet.add(nums[idx])
        } else {
            return true;
        }
    }
    return false;
};


// ContainsDupe2

// Given an array of integers and an integer k
// Find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j]
// and the absolute difference between i and j is at most k.
var containsNearbyDuplicate = function(nums, k) {
    var dict = {};
    for(var idx = 0; idx<nums.length; idx++){
        if(!(nums[idx] in dict)){
            dict[nums[idx]]  = [idx]
        } else {
            var arr = dict[nums[idx]]
            arr.push(idx);
            for(var i = 0; i<arr.length; i++){
                for(var j = i+1; j<arr.length; j++){
                    if(Math.abs(arr[i] - arr[j]) <= k){
                        return true
                    }
                }
            }
        }
    }
    return false
};
