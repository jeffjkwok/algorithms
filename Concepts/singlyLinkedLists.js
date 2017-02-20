// Singly Linked List

// This is the function that defines a SLL here I give the list a head = null and an attribute length.
function SinglyLinked(){
	this.head = null;
	this._length=0;
}

// This creates the blueprint for a node that exists within the list.
// It takes a parameter for the value and sets the next attribute to null.
function Node(value){
	this.val = value;
	this.next = null;
}

// Adds a node to the back of the singly linked list and returns the node that you added while incrementing the _length attribute.
// checks if there is a head of the list then traverses if not adds at head.
SinglyLinked.prototype.add = function(value){
	var node = new Node(value);
	var currentNode = this.head;
	if(!currentNode){
		this.head = node;
		this._length++;
		return node
	}
	while(currentNode.next){
		currentNode = currentNode.next
	}
	currentNode.next = node;
	this._length++;
	return node
}

// Adds to the front of the singly linked list.
// Checks if there is a head, hold current head with temp then sets head to node and next to temp.
SinglyLinked.prototype.addFront = function(value){
	var node = new Node(value);
	if(!this.head){
		this.head = node;
	} else {
		var temp = this.head;
		this.head = node;
		this.head.next = temp;
		this._length++;
	}
}

// SHIFT FUNCTION
SinglyLinked.prototype.removeFront = function(){
	var temp = this.head.next;
	this.head.next = null;
	this.head = temp;
	this._length--;
}
// UNSHIFT FUNCTION
SinglyLinked.prototype.unshift = function(){
	var node = new Node(null)
	var temp = this.head;
	this.head = node;
	this.head.next = temp;
	this._length++;
}

SinglyLinked.prototype.contains = function(value){
	var current = this.head;
	while( current != null){
		if (current.val == value){
			console.log(true)
			return true
		} else {
			current = current.next;
		}
	}
	console.log(false)
	return false
}

SinglyLinked.prototype.front = function(){
	var front = this.head.val;
	return front
}
// POP FUNCTION
SinglyLinked.prototype.pop = function(value){
	if( this.head.val == value ){
		var temp = this.head.next;
		this.head.next = null;
		this.head = temp;
		this._length--;
		return this
	}
	var current = this.head;
	while(current.next){
		if(current.next.val == value){
			var temp = current.next.next;
			current.next.next = null;
			current.next= temp;
			this._length--;
			return this
		} else {
			current = current.next
		}
	}

}

var list = new SinglyLinked();
list.add(7)
list.add(5)
list.addFront(9)
console.log(list)
console.log('*******************')
list.pop(7)
console.log(list)
