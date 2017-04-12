// Reverse Words III
//
// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(s) {
    var arr = s.split(' ');
    var string = '';
    for(var x = 0; x<arr.length; x++){
        var word = arr[x];
        for(var i = word.length-1; i>=0; i--){
            string += word[i];
        }
        if(x == arr.length-1){
            break;
        } else {
            string += ' ';
        }
    }
    return string
};
