// Implementation of a binary search tree
function BST(){
	this.root = null;
}

function BTNode(value){
	this.val = value;
	this.left = null;
	this.right = null;
}

// Counts the number of nodes returns 0 + 1 at the branch that has no leaf then sums it up al the way up to the root.
BST.prototype.count = function(node){
	if(!node){
		return 0;
	}
	else {
		return this.count(node.left) + this.count(node.right) + 1
	}
}

// Measures the height of the tree so you call the 
BST.prototype.height = function(node){
   if(!node){
   	   return 0;
   }
   var leftHeight = this.height(node.left);
   var rightHeight = this.height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}

BST.prototype.add = function(value){
	var node = new BTNode(value);
	if(!this.root){
		this.root = node;
	} else {
		var current = this.root;
		while(current){
			if (value < current.val){
				if(!current.left){
					current.left = node;
					break;
				} else {
					current = current.left;
				}
			}
			if ( value >= current.val){
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

BST.prototype.find = function(value){
	var current = this.root;
	while(current){
		if(current.val == value){
			return current;
		} else {
			if(current.val < value){
				current = current.right;
			} else if ( current.val > value){
				current = current.left;
			}
		}
	}
	return false;
}


var tree = new BST;
tree.add(7)
tree.add(9)
tree.add(4)
tree.add(10)


// tree.height(tree.root)
console.log(tree)
console.log(tree.height(tree.root), 'height')
console.log(tree.count(tree.root), 'count')
console.log(tree.find(10))
