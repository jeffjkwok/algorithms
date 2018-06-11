// Find the needle in the haystack
Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// initial thought
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

// better version because no builtins
var strStr = function(haystack, needle){
    // haystack.length - needle.length + 1 allows you to get to the last part of the string
    for(var idx = 0; idx< haystack.length - needle.length+1 ; idx ++){
        var sub = haystack.substr(idx, needle.length);
        console.log(haystack.length - needle.length + 1, sub)
        if(sub.valueOf() == needle.valueOf()){
            return idx
        }
    }
    return -1
}

console.log(strStr('stephcurry', 'rry'))



//
// var word = 'mississippi'
//
// for(var i = 0; i<word.length-3+1; i++){
//     // however this also increments but when the end index within the substrin method to 3
//     console.log(word.substr(i, 3))
// }
//
// console.log('BREAKKK---------------------------------------')
//
// for(var x = 0; x< word.length-3+1; x ++){
//     var y = x + 3
//     // this increments y as well as x
//     console.log(word.substring(x,y))
// }
