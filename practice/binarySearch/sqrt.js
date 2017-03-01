// Square Root
// Implement int sqrt(int x).
//
// Compute and return the square root of x.

var mySqrt = function(x) {
    var start = 1;
    var end = Math.floor(x/2) + 1
    var mid;
    while(start <= end){
        mid = Math.floor((start+end)/2)
        if( mid*mid > x){
            end = mid -1
        } else if( mid*mid < x){
            start = mid + 1
        } else {
            return mid
        }
    }
    return end
};
