// Longest Palindrome
// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
// This is case sensitive, for example "Aa" is not considered a palindrome here.
// Example:
//
// Input:
// "abccccdd"
//
// Output:
// 7
//
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function(s) {
 var length = s.length
 var hash = {};
 for(var idx = 0; idx< length; idx++){
     if(s[idx] in hash){
         hash[s[idx]]++
     } else {
         hash[s[idx]] = 1
     }
 }
 var count = 0;
 for(key in hash){
     if(hash[key] % 2 > 0){
         count ++
     }
 }
 return count ? length - count + 1 : length
};
