// Binary Tree Paths
// Given a binary tree, return all root-to-leaf paths.
// For example, given the following binary tree:
//
//    1
//  /   \
// 2     3
//  \
//   5

// All root-to-leaf paths are:
//
// ["1->2->5", "1->3"]

var binaryTreePaths = function(root) {
    if(!root) return []
    if(!(root.left || root.right)) return [String(root.val)];

    if(root.left){
        var x =  binaryTreePaths(root.left)
    } else {
        var x = []
    }
    if(root.right){
        var y = binaryTreePaths(root.right)
    } else {
        var y = []
    }

    for(var idx = 0; idx< x.length; idx++){
        x[idx] = root.val + '->' + x[idx]
    }
     for(var idx = 0; idx< y.length; idx++){
        y[idx] = root.val + '->' + y[idx]
    }
    return x.concat(y)
};
