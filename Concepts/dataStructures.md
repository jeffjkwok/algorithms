# Data Structures
<sub>Notes for data structures from Cracking the Coding Interview and other resources.</sub>

### Hash Table

A hashtable maps keys to values for highly efficient look up. One way to approach this is to compute the hash code for a key. Then map the code to an index within an array and insert it to the data structure there.


### Linked Lists

This is a data structure that represents a sequence of nodes. In a singly linked list, each node points to the next node in the list. For a doubly linked list, it provides each node a pointer to the next node and the previous node.

#### Something to Note

A linked list does not provided constant access or instant look up to a specific index for that list. In order to find a N<sup>th</sup> element you will iterate through N elements.

A benefit for linked list is that you can remove things from the front in O(1) time.

**For Singly Linked Lists:** https://github.com/jeffjkwok/algorithms/blob/master/Concepts/singlyLinkedLists.js
**For Doubly Linked Lists:**

### Stacks and Queues

#### Implementing a Stack

A stack uses a last-in first out approach LIFO. That is when stacking dinner plates, the most recent item added is often the first to be removed. Stacks are unlike arrays where they don't offer instant access to specific indices but it does have instant adds and removes since it doesn't shift elements.

There are 4 operations for a stack:
* pop(): removes the function from the end
* push(item): adds an item to the end
* peek(): returns the item in the back of the stack
* isEmpty(): checks if it is empty


### Binary Tree

#### Basics

A every node in binary tree will have have at most two children. For a Binary Search Tree, this is when the values in the left subtree are smaller than the node with value and the right are greater than.

When a node has no children it has no children, while an internal node is one that is not a leaf node. For height, the height of a node is the longest path from a node to a leaf node while the height of a tree if from the height of the root node.
