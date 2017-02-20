## Big O Notation
<sub>Notes taken from Cracking the Coding Interview</sub>

You multiply runtimes when they are typically nested: Nested for loops are typically O(N^2)

Add runtimes when loops are siblings.

*Amortized Time*

This typically happens when the dynamically resizing of an array occurs.

**Example:**
Inserting an element in an array, that might be full, that contains N elements will take O(N) time. If one has to create a new array doubling size of that last array and copying the N elements over. This process will take O(N)

But since this happens not as often and the majority of the time insertions into an array is constant, O(1), therefore the time for insertion is still O(1). Since the doubling of an array happens so often the cost/runtime is "amortized".


*Recursive Pattern*

When calculating an algorithm which is a recursive function that makes multiple calls, the runtime may often be O(branches<sup>depth</sup>)
