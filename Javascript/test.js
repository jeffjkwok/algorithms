// function getBit(num, i){
//     console.log(num, 1<<i)
//     return ((num & (1 << i )) != 0)
// }
//
// function setBit(num,i){
//     console.log(num, 1<<i)
//     return num | ( 1 << i )
// }
//
// function clearBit(num, i){
//     var mask = ~(1 << i);
//     return num & mask
// }
//
// console.log(clearBit(2,1));

// var longestPalindrome = function(s) {
//  var length = s.length
//  var hash = {};
//  for(var idx = 0; idx< length; idx++){
//      if(s[idx] in hash){
//          hash[s[idx]]++
//      } else {
//          hash[s[idx]] = 1
//      }
//  }
//  console.log(hash);
//  var count = 0
//  var odd = false
//  for(key in hash){
//      if(hash[key] % 2 == 0){
//          count += hash[key]
//      }
//      if(hash[key] % 2 > 0){
//          odd = true
//      }
//  }
//  console.log(count)
//  if(odd && count+1 <=length){
//      return count + 1
//  }
//  return count
// };

// var longestPalindrome = function(s) {
//  var length = s.length
//  var hash = {};
//  for(var idx = 0; idx< length; idx++){
//      if(s[idx] in hash){
//          hash[s[idx]]++
//      } else {
//          hash[s[idx]] = 1
//      }
//  }
//  var count = 0;
//  for(key in hash){
//      if(hash[key] % 2 > 0){
//          count ++
//      }
//  }
//  return count ? length - count + 1 : length
// };
//
// if(-1)console.log(true)
//
// console.log(longestPalindrome('ddddsdcc'));

var sqRt = function(n){
     var half = n/2
     var q = [half]
     while(q.length){
          if(q[0]*q[0]==n || ( n-.5 < q[0] * q[0] && q[0] * q[0] < n + .5 )){
               return q[0]
          }
          if(q[0]*q[0] > n){
               var last = q.pop()
               q.push(last/2)
          } else {
               console.log(last)
               var closest = Math.floor(q[0]);
               for(var x = Math.floor(q[0]); x < last; x+= .125){
                    if(x*x == n || n-1 < x*x && x*x < n + 1){
                         closest = Math.max(closest, x)
                    }

               }
               return closest
          }
     }
}

// var sqRt = function(n){
//     var start = 0,
//     mid, end = n;
//     for(var x = 1; x<=50; x++){
//         mid = (start+end)/2
//         if(mid*mid == n) return mid
//         if(mid*mid < n) end = mid
//         if(mid*mid > n) start = mid
//     }
//     return mid
// }

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

console.log(isPerfectSquare(49));

// function hello(num, num1){
//     num = num ^ num1
//     num1 = num ^ num1
//     num = num ^ num1
//     return [num,num1]
// }

// console.log(hello(1,2));
