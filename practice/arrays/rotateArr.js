// Rotate Array
//
// Rotate an array of n elements to the right by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

// initial approach
var rotate = function(nums,k){
    var count = 0;
    k = k % nums.length
    while (count != k){
        for(var idx = nums.length-1; idx>0; idx--){
            var temp = nums[idx];
            nums[idx] = nums[idx-1];
            nums[idx-1] = temp;
        }
    }
}

// my revised approach
var rotate = function(nums, k) {
    var length = nums.length
    k = k % length
    var arr = nums.splice(-k)
    nums.length = length
    nums.copyWithin(k, 0)
    for(idx = 0; idx < arr.length; idx ++){
        nums[idx] = arr[idx];
    }
};
