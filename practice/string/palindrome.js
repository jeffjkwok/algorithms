// Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

var isPalindrome = function(s) {
    var newStr = s.replace(/[^a-zA-Z0-9]/g, '');
    newStr = newStr.toUpperCase();
    for(var idx = 0; idx<newStr.length/2; idx++){
        if(newStr[idx] == newStr[newStr.length-1-idx]){
            continue;
        }
        return false
    }
    return true
};
