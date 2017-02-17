// is Anagram
// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?


// inital approach where i added into dictionary and subtracted when checking letters of t
var isAnagram = function(s, t) {
  var dict ={};
  for(var idx=0; idx<s.length; idx++){
      if(s[idx] in dict){
          dict[s[idx]]++;
      }else {
          dict[s[idx]] = 1;
      }
  }
   for(var idx=0; idx<t.length; idx++){
      if(t[idx] in dict){
          dict[t[idx]]--
      } else {
          return false
      }
  }
  for(var key in dict){
      if(dict[key] > 0){
          return false
      }
  }
  return true
};
