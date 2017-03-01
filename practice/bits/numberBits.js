// Number of Bits
// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011,
// so the function should return 3.

var hammingWeight = function(n) {
    var sum = 0
    var string = n.toString(2)
    var arr = string.split('');
    console.log(arr)
    for(var idx = 0; idx< arr.length; idx ++){
        if(arr[idx] == '1'){
            sum++
        }
    }
    return sum
};
