
function CircularQueue(limit){
    this.queue = []
    this.queue.length = limit;
    this.size = 0;
    this.end = -1
    this.start = 0
}

CircularQueue.prototype.enqueue = function(val){
    if(this.size == this.queue.length){
        console.log('Cant add queue is full.')
        return false
    }

    // this.end++
    // if(this.end > 7){
    //     this.end = -1
    // }

    this.end = (this.end+1) % this.queue.length

    this.queue[this.end] = val
    this.size ++
}

CircularQueue.prototype.dequeue = function(val){
    var temp = this.queue[this.start]
    this.queue[this.start] = null;
    this.start++
    this.size --
    return temp
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
circ.enqueue(9)
// circ.enqueue(10)

console.log(circ);
