// Ransom Note

// Given an arbitrary ransom note string and another string containing letters from all the magazines,
// write a function that will return true if the ransom note can be constructed from the magazines ;
// otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true


var canConstruct = function(ransomNote, magazine) {
    var mag = {};
    var note = {};
    for(var idx = 0; idx < magazine.length; idx++){
        if(!(magazine[idx] in mag)){
            mag[magazine[idx]] = 1;
        } else {
            mag[magazine[idx]] += 1;
        }
    }
    for(var idx= 0; idx < ransomNote.length; idx++){
        if(!(ransomNote[idx] in note)){
            note[ransomNote[idx]] = 1;
        } else {
            note[ransomNote[idx]] += 1;
        }
        if(note[ransomNote[idx]] > mag[ransomNote[idx]] || !(ransomNote[idx] in mag)){
            return false
        }
    }
    return true
};
