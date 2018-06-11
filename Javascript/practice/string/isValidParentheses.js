// Valid Parentheses
//
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


var isValid = function(s) {
    var stack = [];
    var dict = {
        ')':'(',
        ']':'[',
        '}': '{'
    }
    for(var idx = 0; idx<s.length; idx++){
        if(!(s[idx] in dict)){
            stack.push(s[idx])
            console.log(stack)
        } else {
            if(stack.length == 0 || dict[s[idx]] != stack.pop()){
                return false
            }
        }
    }
    if(stack.length == 0){
        return true
    }
    return false
};


console.log(isValid('{{{}}}'))
