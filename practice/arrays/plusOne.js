// Plus One
// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
// You may assume the integer do not contain any leading zero, except the number 0 itself.
// The digits are stored such that the most significant digit is at the head of the list.

var plusOne = function(digits) {
    for(var idx = digits.length-1; idx >= 0; idx--){
        digits[idx] += 1;
        if(digits[idx] < 10){
            return digits;
        } else if(digits[idx] == 10 && digits[idx-1] == undefined){
            digits[idx] = 0;
            digits.length = digits.length + 1;
            digits.copyWithin(1);
            digits[0] = 1;
        } else if (digits[idx] == 10){
            digits[idx] = 0;
        }
    }
    return digits
};
