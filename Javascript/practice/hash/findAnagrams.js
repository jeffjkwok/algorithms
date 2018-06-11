// Find all Anagrams in a String

// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
// The order of output does not matter.

// Input:
// s: "cbaebabacd" p: "abc"
//
// Output:
// [0, 6]
//
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".


// initial approach but timesouts
var findAnagrams = function(s, p) {
    var length = p.length;
    var hash = {};
    var arr = [];
    for(var idx = 0; idx<p.length; idx++){
        if(p[idx] in hash ){
            hash[p[idx]] ++
        } else {
            hash[p[idx]] = 1
        }
    }
    for(var idx = 0; idx<s.length - length +1; idx ++){
        var temp = {};
        var bool = true;
        var compare = s.substr(idx, length);
        console.log(hash, compare)
        for(var i = 0; i < compare.length; i ++){
            if(compare[i] in temp){
                temp[compare[i]]++
            } else {
                temp[compare[i]] = 1;
            }
        }
        console.log('temp', temp)
        for(key in hash){
            if(!(key in temp)){
                bool = false
                break
            } else {
                if(temp[key] != hash[key]){
                    bool = false
                    break
                }
            }
        }
        if(bool == true){
            arr.push(idx)
        }
    }
    console.log(arr)
    return arr
};

// different approach but still times out on same
var findAnagrams = function(s, p) {
    var length = p.length;
    var p = p.split('').sort()
    var arr = [];
    for(var idx = 0; idx<s.length - length +1; idx ++){
        var bool = true
        var compare = s.substr(idx, length);
        var newComp = compare.split('').sort()
        for(var i=0; i<length; i++){
            if(p[i] != newComp[i]){
                bool = false
            }
        }
        if(bool){
            arr.push(idx)
        }
    }
    return arr
};
