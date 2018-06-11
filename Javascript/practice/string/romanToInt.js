// Roman to Interger
// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function(s) {
    var sum = 0;
    var roman = {M: 1000, D:500, C:100, L:50, X: 10, V:5, I:1, IV:4, IX:9, XL:40, XC:90, LD:450, CM: 900, CD: 400}
    for(var idx = 0; idx<s.length; idx++){
        if(s[idx] in roman){
            if(s[idx] == 'C'){
                if(s[idx-1] == 'X'){
                    sum += roman['XC'];
                    sum -= roman['X'];
                    continue;
                } else if (s[idx+1] == 'M'){
                    sum += roman['CM'];
                    idx++;
                    continue;
                } else if (s[idx+1] == 'D'){
                    sum += roman['CD'];
                    idx++;
                    continue;
                }
            } else if (s[idx] == 'L'){
                if(s[idx-1] == 'X'){
                    sum += roman['XL'];
                    sum -= roman['X'];
                    continue;
                } else if (s[idx+1] == 'D'){
                    sum += roman['LD'];
                    idx++;
                    continue;
                }
            } else if (s[idx] == 'I'){
                if(s[idx+1] == 'V'){
                    sum += roman['IV']
                    idx++;
                    continue
                } else if (s[idx+1] == 'X') {
                    sum += roman['IX']
                    idx++;
                    continue
                }
            }
            sum += roman[s[idx]]
        }
    }
    return sum
};

// refactored.
var romanToInt = function(s) {
    var sum = 0;
    var roman = {M: 1000, D:500, C:100, L:50, X: 10, V:5, I:1, IV:4, IX:9, XL:40, XC:90, LD:450, CM: 900, CD: 400}
    for(var idx = 0; idx<s.length; idx++){
        if(s[idx] == 'C' || s[idx] == 'L' || s[idx] == 'I'){
            if( s[idx-1]+s[idx] in roman){
                sum += roman[s[idx-1]+s[idx]];
                sum -= roman[s[idx-1]];
                continue;
            } else if ( s[idx]+s[idx+1] in roman){
                sum += roman[s[idx]+s[idx+1]];
                idx++;
                continue;
            }
        }
        sum += roman[s[idx]]
    }
    return sum
};

// now the other way Int to Roman
var intToRoman = function(num) {
    var str = '';
    var roman = {M: 1000, CM: 900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X: 10, IX:9, V:5, IV:4, I:1};
    var answer = {};
    for( var key in roman ){
        var time = num/roman[key] >> 0;
        num = num % roman[key]
        console.log(key, time, 'remainder: '+num)
        if(time > 0){
            var count = 0;
            while(count != time){
                str+= key;
                count++;
            }
        }
    }
    return str
};
