// Relative Ranks
//
// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
//
// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
//
// Note:
// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.

var findRelativeRanks = function(nums) {
    var arr = nums.slice(0).sort(function(a,b){return b-a})
    var hash = {}
    arr.forEach(function(num,index){
        hash[num] = index + 1 + ''
    })
    return nums.map(function(num, index){
        if(hash[num] == 1){
            return "Gold Medal"
        } else if (hash[num] == 2){
            return 'Silver Medal'
        } else if (hash[num] == 3){
            return 'Bronze Medal'
        } else {
            return hash[num]
        }
    })
};
