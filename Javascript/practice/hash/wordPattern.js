// Word Pattern

// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

var wordPattern = function(pattern, str) {
    var hash = {};
    var mySet = new Set()
    pattern = pattern.split('');
    str = str.split(' ');

    for(var idx = 0; idx<pattern.length; idx++){
        if(!(pattern[idx] in hash)){
            if(mySet.has(str[idx])){
                return false
            }
            hash[pattern[idx]] = str[idx]
            mySet.add(str[idx])
        } else {
            if(hash[pattern[idx]] != str[idx]){
                return false
            }

        }
    }
    return (pattern.length != str.length) ? false : true
};
