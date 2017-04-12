// Find Complement
//
// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
//
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.
//
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

var findComplement = function(num) {
   var numStr = num.toString(2)
   var newStr = ''
   for(var idx = 0; idx<numStr.length; idx++){
       newStr += '1';
   }
   var other = parseInt(newStr, 2);
   return num ^ other
};
