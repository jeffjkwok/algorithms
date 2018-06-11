// Count segments

// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
// Please note that the string does not contain any non-printable characters.
//
// Example:
// Input: "Hello, my name is John"
// Output: 5

var countSegments = function(s) {
    count = (s[0] != " ") ? 1 : 0
    var letter = false;
    for(var idx = 0; idx < s.length; idx++){
        if(s[idx-1]== ' ' && s[idx] != ' '){
            count++;
            letter = true
        } else if (s[idx] != ' '){
            letter = true
        }
    }
    return (s.length == 0) ? 0 : (letter == false) ? 0 : count
};
