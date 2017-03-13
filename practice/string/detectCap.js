// Detect Capital
//
// Given a word, you need to judge whether the usage of capitals in it is right or not.
//
// We define the usage of capitals in a word to be right when one of the following cases holds:
//
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

var detectCapitalUse = function(word) {
    var allCaps = true;
    var lower = true;
    var proper = true;
    for(var idx = 0; idx< word.length; idx++){
        // console.log(word.charAt(idx))
        if(word.charAt(idx) == word.charAt(idx).toLowerCase()){
            allCaps = false;
        }
        if(word.charAt(idx) == word.charAt(idx).toUpperCase()){
            lower = false;
        }
        if(idx > 0){
            if((word.charAt(0) == word.charAt(0).toUpperCase() || word.charAt(0) == word.charAt(0).toLowerCase())&& word.charAt(idx) == word.charAt(idx).toUpperCase()){
                proper = false
            }
        }
    }
    if(allCaps == true || lower == true || proper == true){
        return true
    }
    return false
};
