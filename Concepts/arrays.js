// Built-in Functions and different approaches when using a Array in JavaScript

// Checks if an object is an array
Array.isArray(arr); // takes in an objects and returns True or False

// There are two ways of creating arrays
var arr = [];
var arr = new Array();

//Creating a Array from a String
String.split(' '); // takes on a delimiter and will split it upon that and returns an Arr

//Accessor Functions
arr.indexOf(varible); // this function returns the first index where it appears if it doesn't than it returns -1
arr.lastIndexOf(varible); // this is similar to the one above the returns the last index or -1 if not found

//Creating String Representations from Arrays
arr.join();
arr.toString();

// Creating new Arrays from Existing Arrays
arr.concat(otherArr); //This will concat two arrays and will return a new array, does not modify referenced array
arr.splice(startIdx, numberOf) //allows you to create an array with subset of the arrays, it removes it from the referened array


// Mutator Functions

// Adding Elements to an Array
arr.push(obj); // adds to the back
arr[arr.length] = obj;
arr.unshift(obj); // adds to the front

// Removing Elements form an Array
arr.pop(); // removes from the back
arr.shift(); // removes from the front

// Adding and Removing Elements from the Middle of an Array
arr.splice(startIdx, 0, insertionElements) // 2nd parameter is set to 0 in order to add

// Ordering Arrays
arr.reverse()
arr.sort() // sorts alphabetically
arr.sort(function(a,b){return a-b}) // takes in an ordering function that sorts the array
