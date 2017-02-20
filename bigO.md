# Big O Notation
<sub>Notes taken from Cracking the Coding Interview</sub>

###Space Complexity

The amount of memory or space that is required by an algorithm. If one needs to create an array that contains N elements or of size N then it will require a space complexity of O(N). If it is a two dimensional array that is N x N then the space complexity will be O(N<sup>2</sup>).

```javascript
function sum(n){
  if(n <- 0) {
    return 0
  }
  return n + sum(n-1)
}
```
This recursive function above will take O(N) time and O(N) space. However just because it has N calls it doesn't mean that it will take N space.

###Common Rules and Basic Knowledge

You multiply runtimes when they are typically nested: Nested for loops are typically O(N^2)

Add runtimes when loops are siblings.



###Amortized Time

This typically happens when the dynamically resizing of an array occurs.

**Example:**

Inserting an element in an array, that might be full, that contains N elements will take O(N) time. If one has to create a new array doubling size of that last array and copying the N elements over. This process will take O(N)

But since this happens not as often and the majority of the time insertions into an array is constant, O(1), therefore the time for insertion is still O(1). Since the doubling of an array happens so often the cost/runtime is "amortized".


###Recursive Pattern

When calculating an algorithm which is a recursive function that makes multiple calls, the runtime may often be O(branches<sup>depth</sup>)

### Log N Runtimes
