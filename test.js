function reverse(str) {
  var newStr = '';
  var arr = str.split(' ');
  console.log(arr)
  for(var idx = 0; idx<arr.length; idx++){
    var word = '';
    if(arr[idx].length < 5){
      newStr += arr[idx] + ' ';
    } else {
      for(var x = arr[idx].length-1; x>=0; x--){
        word += arr[idx][x];
      }
      newStr +=  word + ' ';
    }
  }
  console.log(newStr)
  return newStr
}


reverse("Sixty-Four comes asking for bread.")
