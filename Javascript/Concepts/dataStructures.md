# Data Structures
<sub>Notes for data structures from CTCI and other resources.</sub>

## Arrays

A practical and classic data structure where data is stored. Pretty self explanatory, however I will list some built-in functions and different ways to do things.

**Examples of functions for Arrays:** https://github.com/jeffjkwok/algorithms/blob/master/JavaScript/Concepts/arrays.js

## Hash Table

A hashtable maps keys to values for highly efficient look up. One way to approach this is to compute the hash code for a key. Then map the code to an index within an array and insert it to the data structure there.


## Linked Lists

This is a data structure that represents a sequence of nodes. In a singly linked list, each node points to the next node in the list. For a doubly linked list, it provides each node a pointer to the next node and the previous node.

**Something to Note** A linked list does not provided constant access or instant look up to a specific index for that list. In order to find a N<sup>th</sup> element you will iterate through N elements.

A benefit for linked list is that you can remove things from the front in O(1) time.

**Implementation of Singly Linked Lists:** https://github.com/jeffjkwok/algorithms/blob/master/JavaScript/Concepts/singlyLinkedLists.js

**Implementation of Doubly Linked Lists:**

## Stacks and Queues

#### Implementing a Stack

A stack uses a last-in first-out approach LIFO. That is when stacking dinner plates, the most recent item added is often the first to be removed. Stacks are unlike arrays where they don't offer instant access to specific indices but it does have instant adds and removes since it doesn't shift elements.

There are 4 operations for a stack:
* pop(): Removes the function from the end
* push(item): Adds an item to the end
* peek(): Returns the item in the back of the stack
* isEmpty(): Checks if it is empty

One case where stacks are useful are in certain recursive algorithms. IE: where you need to push temporary data onto a stack as you recurse but remove them as you backtrack. It can also be used to implement a recursive algorithm iteratively.

**Implementation of Stacks:** https://github.com/jeffjkwok/algorithms/blob/master/JavaScript/Concepts/stacks.js

#### Implementing a Queue

A queue uses a first-in first-out approach FIFO such as in a line. The items are removed from the data structure in the same order as they are added.

There are also 4 operations:
* add(): Adds an item to the end of the list
* remove(): Remove the first item in the list
* peek(): Return the top of the queue
* isEmpty(): Checks if empty

Other things to note, queues are often used in breadth-first search or in implementing a cache. In breadth-frist, queues are typically used to store a list of nodes that are needed to process. Each time a node is processed, you add the adjacent nodes to the back of the queue. This allows us to process the nodes in the order in which they are viewed.

**Implementation of Queues:**

## Trees and Graphs

For trees the worst case and average case runtime may vary wildly. Something else to note, a tree is actually a type of graph.

#### Type of trees

A tree is a data structure composed of nodes. In addition, each tree has a root node from there every node can have zero or more child nodes.

#### Trees vs. Binary Trees

A binary tree is a tree that has up to two children, however not all trees are binary trees. There are occasions when you might have a tree that is not a binary tree. A node with no children is a leaf node.

#### Binary Trees vs. Binary Search Trees

A binary search tree (BST) is a binary tree where every left node descendent is less than or equal the value while every right descendent is greater than the value of the node.

Not all Binary Search Trees will allow duplicates ask interviewer to clarify. Also, clarify which tree your interviewer wants you to demonstrate because it may not be a BST.

### Balanced vs Unbalanced

While many trees are balanced, not all are. Balancing a tree doesn't mean that left and right subtrees are the same size. One way to think about it is that a balanced tree means *'not terribly Unbalanced'* just balanced enough to ensure O(log n) for insert and find.

The most common types of balanced trees are red-black trees and AVL trees.

**Complete Binary Trees:** The tree is full filled except for the last level. For the last level it is filled left to right.

**Full Binary Trees:** A full binary tree is a tree where every node that has either zero or two children.

**Perfect Binary Tree:** Is a tree that is both full and complete.

### Binary Tree Traversal

You should know and be comfortable with implementing in-order, post-order, and pre-order traversal. The most common being the in-order traversal.

**In-Order Traversal:** This method of traversal means your go through the left, the current, then the right node.

**Pre-Order Traversal:** This method visits the current before its children.

**Post-Order Traversal:** The last traversal visits the current node last and its children first.

### Binary Heaps (Min & Max Heaps)

Max heaps are in descending order. A min-heap is a complete binary tree where each node is smaller than its children. Therefore the minimum element of the tree is the root node. There will be two key operations in a min-heap: **insert** and **extract_min**

*Insert*

When inserting into a min-heal you always start by adding it to the bottom most right. After, you fix the tree by swapping the new element with the parent until the appropriate spot is found. **Runtime: O(log n)**

*Extract Min*

Finding the min of a min-heap is easy: its always at the top. The hard part is removing it. The strategy typically goes that we remove the minimum element and swap it with the last element in the tree. After bubble down and swap it with its children until the heap is fixed. **Runtime: O(log n)**

### Tries (Prefix Trees)

A trie is a strange data structure. This structure is a variant of an n-ary tree where the characters are stored at each node and each path down the tree my represent a word. Uses characters like * to represent a word is complete.

Very commonly, a trie is used to store the entire english language for quick prefix lookups. While a hash table can quickly look up a string is a valid word, it cant tell us if a prefix of any word but a trie can quickly. There are many problems that involve valid words use tries as a method of optimization since.

### Graphs

A tree is actually a type of graph, but not all graphs are tress. A tree is basically a connected graph without cycles. A graph is simply a collection of nodes with edges between (some of) them.

* A graph can either be directed or undirected. Those with directed edges can only go one way while undirected edges are two way.

* Graphs may also contain multiple isolated subgraphs.

* The graph may also have cycles or not. **Acyclic Graph** is one with out cycles

#### Adjacency List

The most common way to represent a graph is using these adjacency list. Every vertex/node stores a list of adjacent vertices. In an undirected graph an edge like (a,b) would be stored twice: once in node a's adjacent vertice list and once in node b's list.

#### Adjacency Matrices

An Adjacency matrix is a N by N boolean matrix where N is the number of nodes and where true alue at matrix[i][j] indecates an edge from node i to node j.

In an undirected graph, an adjacency matrix will be symmetric. In a directed graph it will not necessarily be symmetric. The same algorithms that are used on adjacency list can also be done on matrices but they might be less efficient.

### Graph Search

The most two common ways to search a graph are depth-first search and breadth-first search. when searching through graphs you much check if it has been visited or you would be stuck in a infinite loop.

#### Depth-first Search DFS

For **depth-first search**, you start at the rote and explore each branch all the way to the bottom before moving on to the next branch. This search is often preferred if you want to visit every node in the graph.

#### Breadth-first Search BFS

For **breadth-first search**, you also start at the root and explore each neighbor before going through the children. If you're looking for shortest path you tend use breadth-first.

#### Bidirectional Search

This search is typically used to find the shortest path between a source and destination. It works by basically using two BFS searches. When they collide that is typically when you have found a path.

## Bit Manipulation

This concept is used in a variety of problems. Sometimes problems can require bit manipulation, other times its a useful technique to optimize your code.

**Note** If you XOR (^) a number with its negated (~) number you get a sequence of 1s.

### Bit Facts and Tricks

|     XOR     |     AND    |     OR      |
|:-----------:|:----------:|:-----------:|
| x ^ 0s = x  | x & 0s = 1 | x l 0s = x  |
| x ^ 1s = ~x | x & 1s = x | x l 1s = 1s |
| x ^ x = 0   | x & x = x  | x l x = x   |

### Two's Complement and Negative Numbers

Negative numbers in binary often have a sign bit where if it is a 1 in that bit it becomes negative.
Ex: With the sign being the first bit in the number. Where the sign bit becomes the negative value of that location.

0 | 1 1 1 = 0 + 7 = 7

1 | 1 1 1 => -8 + 7 = -1

### Arithmetic vs Logical Right

There are two types of right shift operators. Arithmetic right shift essentially divides by two while the logical right shift does what we would visually see as shifting bits which is best seen on a negative number

For **logical right shifts** (>>>), the bits are shifted and 0 is put in the most significant bit. In an **arithmetic right shift** (>>), the values are shifted to the right but fill in the new bits with the value of the sign bit. This has the effect of *roughly* dividing by two.

Note: A sequence of all 1s in a signed integer/bit is -1

```javascript

// Logical Right Shift
[1,0,1,1,0,1,0,1] = -75
// becomes
[0,1,0,1,1,0,1,0] = 90

// Arithmetic Right Shift
[1,0,1,1,0,1,0,1] =-75
// becomes
[1,1,0,1,1,0,1,0] = -38

```
### Common Bit Tasks: Getting and Setting

These operations are important to know and understand. It should be required to understand how to implement these methods to solve other bit problems

#### Get Bit

This method shifts 1 over by i bits. Then we perform an AND with num, to clear all bits other than the bit at bit i. We then after compare that to 0. If that new value is not zero then bit i must have a 1. Other wise bit i is 0. This method basically checks if there is a bit is on at that position; it returns a boolean.

```javascript
function getBit(num, i){
    return ((num & (1 << i )) != 0)
}
```

#### Set Bit

This method shifts 1 over by i bits. Then performs an OR with num, changing the value of bit i. All the other bits of the mask are zero and will not affect num. This method basically changes a bit other than the ones active and returns the sum.

```javascript
function setBit(num,i){
    return num | ( 1 << i )
}
```

#### Clear Bit
This method operates basically the opposite of setBit. We create a bit by with only one 1 and then negating it. We then perform an AND with the num. This should clear the ith bit and leave the remainder unchanged

Then the clearBitsThroughI from the most significant bit through i (inclusive), create a mask with a 1 at the ith bit. Then we subtract 1 from it, giving us a sequence of 0s followed by i 1s. We then AND with the mask to leave the last i bits.

For clearBitsThrough0 from i to 0 inclusively, take a sequence of all 1s (which is -1) and shift it left by i + 1 bits. Then it gives a sequence of 1s infthe most significant bits followed by i 0 bits.

```javascript
function clearBit(num, i){
    var mask = ~(1 << i);
    return num & mask
}

function clearBitsThroughI(num, i){
    var mask = (1 << i) - 1;
    return num & mask
}

function clearBitsThrough0(num, i){
    var mask = (-1 << (i + 1));
    return num & mask
}
```

#### Update Bit

To set the ith bit to a value v, we first clear the bit at position i by using a mask. Then shift the intended value, v, left by i bits. this will create a number with a bit i equal to v and all other bits = to 0. then we OR these two numbers, updating the ith bit if v is 1 and leaving it as 0 otherwise.


```javascript
function updateBit(num, i){
    var value = bitsIsI ? 1 : 0;
    var mask = ~(1 << i);
    return ( num & mask ) | ( value << i )
}
```

## Math and Logic Puzzles

### Prime Numbers

As you probably know, every positive integer can be decomposed into a product of primes.

#### Divisibility

The prime number law stated means that in order for a number x to divided a number y, all primes in x's factorization must be in y's factorization:
* Let x = 2<sup>j0</sup> * 3<sup>j1</sup> * 5<sup>j2</sup> * 7<sup>j3</sup>...

* Let y = 2<sup>k0</sup> * 3<sup>k1</sup> * 5<sup>k2</sup> * 7<sup>k3</sup>...

* if x/y, then for all i, ji <= ki
