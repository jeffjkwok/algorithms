// Find Max Sub Array
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.


var maxSubArray = function(nums) {
    var arrMax = nums[0];
    var sum = 0, maxSum = 0;
    for(var idx = 0; idx< nums.length; idx++ ){
        arrMax = Math.max(arrMax, nums[idx])
        sum += nums[idx];
        if(sum < 0){
            sum = 0;
        }
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum > 0 ? maxSum : arrMax
};
