// Binary Tree Tilt// Given a binary tree, return the tilt of the whole tree.//// The tilt of a tree node is defined as the absolute difference between the sum of// all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.//// The tilt of the whole tree is defined as the sum of all nodes' tilt.// EX:// Input://         1//       /   \//      2     3// Output: 1// Explanation:// Tilt of node 2 : 0// Tilt of node 3 : 0// Tilt of node 1 : |2-3| = 1// Tilt of binary tree : 0 + 0 + 1 = 1 var findTilt = function(root) {    var tilt = {val:0};    function tilting(root, tilt){        if(!root) return 0;        var left = tilting(root.left, tilt);        var right = tilting(root.right, tilt);        tilt.val += Math.abs(left-right);        return root.val + left+ right;    }    tilting(root, tilt)    return tilt.val};