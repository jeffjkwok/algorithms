
function CircularQueue(limit){
    this.queue = []
    this.queue.length = limit;
    this.size = 0;
    this.end = 0;
    this.start = 0;
}

CircularQueue.prototype.enqueue = function(val){
    if(this.size == this.queue.length){
        console.log('Cant add queue is full.')
        return false
    }
    this.queue[this.end] = val
    this.end = (this.end+1) % this.queue.length
    this.size ++
}

CircularQueue.prototype.dequeue = function(val){
    if(this.size == 0){
        return false
    }
    this.queue[this.start] = undefined
    this.start = (this.start+1) % this.queue.length
    this.size--;
}

var circ = new CircularQueue(8)
circ.enqueue(1)
circ.enqueue(1)
circ.enqueue(1)
circ.enqueue(1)
circ.enqueue(1)
circ.enqueue(1)
circ.enqueue(1)
circ.enqueue(1)
circ.dequeue()
circ.dequeue()
// circ.dequeue()
// circ.dequeue()
// circ.dequeue()
circ.enqueue(10)

console.log(circ);
