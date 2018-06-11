// Stacks can be implemented using an array or a linked list

// implemented as an Array
function ArrStack(){
    this.data = [];
}

// Removes from back of the array
ArrStack.prototype.pop = function(){
    return this.data.pop()
}

// Adds to the end of an array
ArrStack.prototype.push = function(value){
    this.data.push(value)
}

// Returns last value in the array
ArrStack.prototype.peek = function(){
    return this.data[this.data.length-1]
}

// checks if the array is empty
ArrStack.prototype.isEmpty = function(){
    if(this.data.length !== 0 ){
        return false
    }
    return true
}
//
// var stack = new ArrStack()
// stack.push(7)
// stack.push(5)
// console.log(stack.isEmpty())


// implemented as a SLL
function ListStack(){
    this.top = null;
}

function StackNode(value){
    this.val = value;
    this.next = null;
}

// adds to front of linked list checks if there is a node at the top
ListStack.prototype.push = function(value){
    var node = new StackNode(value);
    if(!this.top){
        this.top = node;
    } else {
        var temp = this.top;
        this.top = node;
        this.top.next = temp
    }
}

// removes from front of the linked list
ListStack.prototype.pop = function(){
    var temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp
}

// checks if it is empty
ListStack.prototype.isEmpty = function(){
    if(this.top){
        return false
    }
    return true
}

// returns the top
ListStack.prototype.peek = function(){
    return this.top
}

// var stack2 = new ListStack()
// stack2.push(1)
// stack2.push(2)
// console.log(stack2.pop())
// console.log(stack2.peek())
