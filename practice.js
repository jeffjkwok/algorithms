// Add numbers up to said number
// Version 1
function addNumbers(num){
  if (Number.isInteger(num)){
    var sum = 0;
    for(var x = 0; x<=num; x++){
      sum += x;
    }
    return sum
  } else {
    return "not a number"
  }
}
console.log(addNumbers(10))
// Version2
function addNumbers2(num){
  return (Number.isInteger(num) && num>0) ? num*(num+1)/2 : false
}
console.log(addNumbers2(10))
// Conditional Teranary Operator
// (condition) ? (if condition then this) : (otherwise this)
