# Data Structures
<sub>Notes for data structures from Cracking the Coding Interview and other resources.</sub>

### Hash Table

A hashtable maps keys to values for highly efficient look up. One way to approach this is to compute the hash code for a key. Then map the code to an index within an array and insert it to the data structure there.


### Linked Lists

This is a data structure that represents a sequence of nodes. In a singly linked list, each node points to the next node in the list. For a doubly linked list, it provides each node a pointer to the next node and the previous node.

#### Something to Note

A linked list does not provided constant access or instant look up to a specific index for that list. In order to find a N<sup>th</sup> element you will iterate through N elements.

A benefit for linked list is that you can remove things from the front in O(1) time.

**Implementation of Singly Linked Lists:** https://github.com/jeffjkwok/algorithms/blob/master/Concepts/singlyLinkedLists.js
**Implementation of Doubly Linked Lists:**

### Stacks and Queues

#### Implementing a Stack

A stack uses a last-in first-out approach LIFO. That is when stacking dinner plates, the most recent item added is often the first to be removed. Stacks are unlike arrays where they don't offer instant access to specific indices but it does have instant adds and removes since it doesn't shift elements.

There are 4 operations for a stack:
* pop(): Removes the function from the end
* push(item): Adds an item to the end
* peek(): Returns the item in the back of the stack
* isEmpty(): Checks if it is empty

One case where stacks are useful are in certain recursive algorithms. IE: where you need to push temporary data onto a stack as you recurse but remove them as you backtrack. It can also be used to implement a recursive algorithm iteratively.

**Implementation of Stacks:** https://github.com/jeffjkwok/algorithms/blob/master/Concepts/stacks.js

#### Implementing a Queue

A queue uses a first-in first-out approach FIFO such as in a line. The items are removed from the data structure in the same order as they are added.

There are also 4 operations:
* add(): Adds an item to the end of the list
* remove(): Remove the first item in the list
* peek(): Return the top of the queue
* isEmpty(): Checks if empty

Other things to note, queues are often used in breadth-first search or in implementing a cache. In breadth-frist, queues are typically used to store a list of nodes that are needed to process. Each time a node is processed, you add the adjacent nodes to the back of the queue. This allows us to process the nodes in the order in which they are viewed.

**Implementation of Queues:**

### Trees and Graphs

For trees the worst case and average case runtime may vary wildly. Something else to note, a tree is actually a type of graph.

#### Type of trees

A tree is a data structure composed of nodes. In addition, each tree has a root node from there every node can have zero or more child nodes.

#### Trees vs. Binary Trees

A binary tree is a tree that has up to two children, however not all trees are binary trees. There are occasions when you might have a tree that is not a binary tree. A node with no children is a leaf node.

#### Binary Trees vs. Binary Search Trees

A binary search tree (BST) is a binary tree where every left node descendent is less than or equal the value while every right descendent is greater than the value of the node.

Not all Binary Search Trees will allow duplicates ask interviewer to clarify. Also, clarify which tree your interviewer wants you to demonstrate because it may not be a BST.

#### Balanced vs Unbalanced

While many trees are balanced, not all are. Balancing a tree doesn't mean that left and right subtrees are the same size. One way to think about it is that a balanced tree means *'not terribly Unbalanced'* just balanced enough to ensure O(log n) for insert and find.

The most common types of balanced trees are red-black trees and AVL trees.

**Complete Binary Trees:** The tree is full filled except for the last level. For the last level it is filled left to right.

**Full Binary Trees:** A full binary tree is a tree where every node that has either zero or two children.

**Perfect Binary Tree:** Is a tree that is both full and complete. 
