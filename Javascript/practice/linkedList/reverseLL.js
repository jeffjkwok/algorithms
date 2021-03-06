// Reverse Linked List

// Reverse a singly linked list.

var reverseList = function(head) {
    if(!head) return head
    var current = head;
    var prev = null;
    var next = null;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head
};
