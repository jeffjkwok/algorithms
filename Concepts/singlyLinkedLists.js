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

// Remove from front also known as shift.
// Holds the next node after head and nulls the head
SinglyLinked.prototype.removeFront = function(){
	var temp = this.head.next;
	this.head.next = null;
	this.head = temp;
	this._length--;
}

// Unshift function
// This function adds a node to the front of the list and connects it to the rest of the list
SinglyLinked.prototype.unshift = function(){
	var node = new Node(null)
	var temp = this.head;
	this.head = node;
	this.head.next = temp;
	this._length++;
}

// Iterates through the list and checks if the value is contained within a node in the list
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
	return false
}

// Returns the value of the head
SinglyLinked.prototype.front = function(){
	var front = this.head.val;
	return front
}

// Pop the value from the list
// First test the if the value is at the head
// Then if its not the head it checks for the value in the node after current if its there hold current.next.next in a temp
// After sever the connections and reconnect the current to the temp
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
			current.next = temp;
			this._length--;
			return this
		} else {
			current = current.next
		}
	}

}

SinglyLinked.prototype.removeDupe = function(){
	if(!this.head){
		return false
	}
	var mySet = new Set();
	var current = this.head;
	mySet.add(current.val);
	while(current.next){
		console.log(current.val)
		if(mySet.has(current.next.val)){
			var temp = current.next.next;
			current.next.next = null;
			current.next = temp;
			this._length --;
		} else {
			mySet.add(current.next.val)
			current = current.next
		}
	}
}

SinglyLinked.prototype.kToLast= function(k){
	if(!list.head){
		return false
	}
	var current = this.head;
	var runner = this.head;
	var count = -1;
	while(runner.next){
		count++;
		runner=runner.next;
		if(count>= k){
			current = current.next
		}
	}
	console.log(current)
	return current
}

SinglyLinked.prototype.partition = function(val){
	if(!this.head){
		return false
	}
	var current = this.head;
	while(current){
		if(current.next.val < val){
			var temp = current.next;
			current.next = current.next.next
			temp.next = this.head;
			this.head = temp;
		}
		current = current.next
	}
}

var list = new SinglyLinked();
list.add(7)
list.add(1)
list.add(7)
list.add(4)
list.add(6)
list.add(5)
// list.removeDupe()
// list.kToLast(1)
list.partition(6)
console.log(list.head.next.next)
