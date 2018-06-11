// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// my initial theory
var longestCommonPrefix = function(strs) {
    if( strs.length == 0 || strs[0]==''){
        return ''
    }
    var dict = {};
    var str;
    for(var idx = 0; idx<strs.length; idx++){
        for(x = 1; x<=Math.ceil(strs[idx].length/2); x++){
            str = strs[idx].substr(0,x)
            if(!(str in dict)){
                dict[str] = 1
            } else {
                dict[str] += 1
            }
        }
    }
    var max = 0
    var prefix;
    for( var key in dict ){
        if(max < dict[key]){
            max = dict[key]
            prefix = key
        } else if (!(max<dict[key]) && max == dict[key]) {
            prefix = ''
        }
    }
    console.log(dict, prefix);
    return prefix
};



// the right way to do it
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return ""
    }
    var result = '';
    for(var idx = 0; idx<strs[0].length; idx++){
        if(strs.every(function(item){ return strs[0][idx] === item[idx]})){
            result += strs[0][idx]
        } else {
            break;
        }
    }
    console.log(result)
    return result
};
