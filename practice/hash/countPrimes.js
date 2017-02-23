// Count Primes
// Count the number of prime numbers less than a non-negative number, n.


// inital approach that timesout
var countPrimes = function(n) {
    var count = 0;
    for(var x = 2; x < n; x++){
        var prime = true;
        for(var y = 2; y <= Math.floor(x/2); y++){
            if( x % y == 0 ){
                prime = false
                break
            }
        }
        if(prime){
            count++
        }
    }
    return count
};


// better approach
var countPrimes = function(n){
    var count = 0;
    var arr = [];
    for(var x = 2; x < n; x++){
        if(arr[x] === undefined){
            arr[x] = 1
            count ++
            var y = 2;
            while( x*y < n ){
                arr[x*y] = 0
                y++
            }
        }
    }
    console.log(arr)
    return count
}

console.log(countPrimes(7));
