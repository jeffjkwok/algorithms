# Data Structures
<sub>Notes for data structures from Cracking the Coding Interview and other resources.</sub>

### Hash Table

A hashtable maps keys to values for highly efficient look up. One way to approach this is to compute the hash code for a key. Then map the code to an index within an array and insert it to the data structure there.


### Linked Lists

This is a data structure that represents a sequence of nodes. In a singly linked list, each node points to the next node in the list. For a doubly linked list, it provides each node a pointer to the next node and the previous node.

###### Something to Note

A linked list does not provided constant access or instant look up to a specific index for that list. In order to find a N<sup>th</sup> element you will iterate through N elements.

A benefit for linked list is that you can remove things from the front in O(1) time.

For Singly Linked List: https://github.com/jeffjkwok/algorithms/blob/master/Concepts/linkedLists.js
