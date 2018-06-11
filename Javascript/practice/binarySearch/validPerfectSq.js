// Valid Perfect Square

// Given a positive integer num, write a function which returns True if num is a perfect square else False.
//
// Note: Do not use any built-in library function such as sqrt.

var isPerfectSquare = function(num) {
    var mid = num/2;
    var q = [mid];
    while(q.length){
        if( mid*mid == num) return true
        if( mid*mid > num ){
            var last = q.pop()
            q.push(last/2)
        } else {
            for(var x= Math.floor(mid); x < last; x++){
                if( mid*mid == num) return true
            }
            return false
        }
    }
};

// Recursive perfect square funciton
var isPerfectSquare = function(num) {
    if(num == 0 || num == 1){
         return true
    }
    return search(num, 2, num-1)
};

function search(num, x, y){
     if( y <= x ){
          return x*x === num
     }
     var half = Math.floor((x+y)/2)
     if(half*half == num){
          return true
     }
     return half*half > num ? search(num, x, half-1) : search(num, half+1, y)
}
