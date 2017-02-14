// Repeated Sub String
// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
// You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
// Example 1:
    // Input: "abab"
    // Output: True
    // Explanation: It's the substring "ab" twice.
// Example 2:
    // Input: "aba"
    // Output: False
// Example 3:
    // Input: "abcabcabcabc"
    // Output: True
    // Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

var repeatedSubstringPattern = function(str) {
    var half = Math.floor(str.length/2);
    for(var idx = 1; idx <= half; idx++ ){
        console.log('------ one sub string iteration')
        if( str.length % idx !== 0){
            continue;
        }
        var current = str.substr(0, idx)
        var flag = true;
        for(var x = idx; x <= str.length - idx; x += idx){
            console.log(current, 'current')
            console.log(str.substr(x, idx), 'substr')
            if(str.substr(x, idx) !== current){
                flag = false;
                break;
            }
        }
        if(flag){
            return true
        }
    }
    return false
};
