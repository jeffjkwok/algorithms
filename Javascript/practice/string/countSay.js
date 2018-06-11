// Count and Say sequence

// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...
//
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.


var countAndSay = function(n) {
    var seq = '1';
    for(var i = 1; i < n; i++){
        console.log(seq)
// the str variable holds the new sequence every time until n -> sets to empty string
        var str = seq
        seq = ''
        var count = 1
// here we iterate through str which was the previous seqence result
        for(var idx=0; idx<str.length; idx++){
// checks the next number if not a match append to seqence
            if(str[idx] != str[idx+1]){
                seq += count + str[idx]
                count = 1
// if it does match increment count
            } else {
                count++
            }
        }
    }
    return seq
}

console.log(countAndSay(2))
