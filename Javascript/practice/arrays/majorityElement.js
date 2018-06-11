// Majority Element
//
// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.


var majorityElement = function(nums) {
    var dict = {};
    for(var idx = 0; idx< nums.length; idx++){
        if(!(nums[idx] in dict)){
            dict[nums[idx]] = 1;
        } else {
            dict[nums[idx]] += 1;
        }
        if(dict[nums[idx]] > nums.length/2){
            return nums[idx]
        }
    }
};
