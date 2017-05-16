//  Sorting Algorithms


// Quick Sort
// divide and conquer algorithm, sorts everything into left and right
// picks random pivot so that it doesnt approach worse case scenario n^2
var arr = [1,5,36,2,3,423,43,234,45,65,23,6]

function quicksort(arr){
  if(arr.length < 2){
    return arr;
  }
  var idx = Math.floor(Math.random()*arr.length);
  var pivot = arr[idx];
  var left = [], right = [];
  for(var i = 0; i < arr.length; i++){
    if(idx == i ) continue;
    if(arr[i]>pivot){
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right))
}

// console.log(quicksort(arr))


// Selection Sort
// touches every element in the array, very slow and inefficent
// compare the number with the rest in the array
function selectionSort(arr){
  var temp;
  for(var i= 0; i<arr.length; i++){
    var minIdx = i;
    for(var x = i+1; x<arr.length; x++){
      if(arr[minIdx]>arr[x]){
        minIdx = x;
      }
    }
    temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  console.log(arr)
}

selectionSort(arr)
