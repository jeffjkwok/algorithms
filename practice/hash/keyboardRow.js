// Keboard Row

// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard
//
// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.


var findWords = function(words) {
    var top = new Set(['Q','W','E','R','T','Y','U','I','O','P']),
    mid = new Set(['A','S','D','F','G','H','J','K','L']),
    bottom = new Set(['Z','X','C','V','B','N','M'])
    var keyboard = {
        top: top,
        mid: mid,
        bottom: bottom
    }
    var arr = []
    for(var word = 0; word < words.length; word++){
        for(var row in keyboard){
            for(var idx = 0; idx<words[word].length; idx++){
                if(!(keyboard[row].has(words[word][idx].toUpperCase()))){
                    break
                }
                if(idx == words[word].length-1){
                    arr.push(words[word])
                }
            }
        }
    }
    return arr
};
