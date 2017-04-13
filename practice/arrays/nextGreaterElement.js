// Next Greater Element
//
// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
//
// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

// Example:
// Input: nums1 = [2,4], nums2 = [1,2,3,4].
// Output: [3,-1]
// Explanation:
//     For number 2 in the first array, the next greater number for it in the second array is 3.
//     For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
//

var nextGreaterElement = function(findNums, nums) {
    var ans = [];
    for(var x = 0; x<findNums.length; x++){
        var num = findNums[x];
        for(var i = nums.indexOf(num); i<=nums.length; i++){
            if(nums[i]>num){
                ans.push(nums[i]);
                break;
            }
            if(i == nums.length){
                ans.push(-1)
            }
        }
    }
    return ans
};
