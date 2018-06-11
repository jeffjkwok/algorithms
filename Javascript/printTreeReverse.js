// Given binary tree, print it out in reverse order
//
//             5
//         3      7
//      1    4  6   10
//
//  1,3,4,5,6,7,10
//
function Tree() {
     this.root;
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

Tree.prototype.add = function(val){
    var node = new Node(val);
    if(!this.root){
        this.root = node
    } else {
        var current = this.root;
		while(current){
			if (val < current.val){
				if(!current.left){
					current.left = node;
					break;
				} else {
					current = current.left;
				}
			}
			if ( val >= current.val){
				if(!current.right){
					current.right = node;
					break;
				} else {
					current = current.right;
				}
			}
		}
    }
}


function printReverse(tree) {
    if(!tree.root){
        return false;
    }
    reverseHelper(tree.root)
}

function printForward(tree){
    if(!tree.root){
        return false;
    }
    forwardHelper(tree.root)
}

function reverseHelper(node){
    if(!node){
    	   return;
    }
    reverseHelper(node.right);
    console.log(node.val)
    reverseHelper(node.left);
}

function forwardHelper(node){
    if(!node){
    	   return;
    }
    forwardHelper(node.left);
    console.log(node.val)
    forwardHelper(node.right);
}


var tree = new Tree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(1)
tree.add(7)
printReverse(tree)
console.log('--------')
printForward(tree)
