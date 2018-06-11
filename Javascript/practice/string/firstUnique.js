// First Unique Character in a String

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

var firstUniqChar = function(s) {
    if(s == '') return -1
    for(var idx = 0; idx<s.length; idx++){
        if(s.indexOf(s[idx]) == s.lastIndexOf(s[idx])){
            return idx
        }
    }
    return -1
};
