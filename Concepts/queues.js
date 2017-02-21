// This Queue will be implemented using a SLL
function Queue(){
    this.front = null;
}

function QueueNode(value){
    this.val = value;
    this.next = null;
}

Queue.prototype.add = function(value){
    var node = new QueueNode(value);
    if(!this.front){
        this.front = node;
    } else {
        var current = this.front;
        while(current.next){
            current = current.next
        }
        current.next = node;
    }
}

Queue.prototype.remove = function(){
    if(!this.front){
        return null
    } else {
        var temp = this.front;
        this.front = this.front.next;
        temp.next = null
        return temp;
    }
}

Queue.prototype.peek = function(){
    return this.front
}

Queue.prototype.isEmpty = function(){
    if(this.front){
        return false
    }
    return true
}

var queue = new Queue();
queue.add(1)
queue.add(2)
queue.remove()
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue)
