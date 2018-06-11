// Given sorted array, remove duplicates
// inplace and with constant memory

// ex: nums=[1,1,2]
// output: [1,2]
// return length = 2


// this was my inital thought but timesout if array is too long. ie: 20k entries
var removeDuplicates = function(nums) {
    var count = 0;
    console.log(nums);
    for(var x=0; x<nums.length; x++){
        if(nums[x] == nums[x+1] && nums[x+1] != undefined){
            count ++;
            for(var y = x; y<nums.length; y++){
                nums[y] = nums[y+1];
            }
            x--;
        }
    }
    return nums.length = nums.length-count
};


//// splice is faster than O(n)

// var removeDuplicates = function(nums) {
//     for (i = 0; i < nums.length; i++) {
//         if (nums[i] == nums[i+1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
// };

// // O(n) solution
// var removeDuplicates = function(nums) {
//     var count = 0;
//     for( var idx = 1; idx < nums.length; idx++){
//         if(nums[count] != nums[idx]){
//             count++;
//             nums[count] = nums[idx];
//         }
//     }
//     return nums.length = count+1;
// };
