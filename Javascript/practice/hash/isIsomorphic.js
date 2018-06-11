// Is Isomorphic

// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
//
// For example,
// Given "egg", "add", return true.
// Given "foo", "bar", return false.
// Given "paper", "title", return true.
//
// Note:
// You may assume both s and t have the same length.



var isIsomorphic = function(s, t) {
    var hash = {};
    var mySet = new Set();
    for(var idx = 0; idx<s.length; idx++){
        // if it is in the hashtable
        if(t[idx] in hash){
            // check if it has already been hashed to a different key by comparing the value in the hash to s[idx]
            if(hash[t[idx]]!= s[idx]){
                return false
            }
        // if it is not in the hashtable
        } else {
            // check if it is in the set to see if its been added with a different key
            // if not add to set and set key with value from s into hash
            if(!mySet.has(s[idx])){
                hash[t[idx]] = s[idx]
                mySet.add(s[idx])
            // if it is in a set then return false because it was already added and with a different key
            } else {
                return false
            }
        }
    }
    // check length but dont need to
    return (s.length != t.length) ? false : true
};
