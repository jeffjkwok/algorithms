// Invert Binary three
//
// Invert a binary tree.
// 4
// /   \
// 2     7
// / \   / \
// 1   3 6   9
//
// to:
//
// 4
// /   \
// 7     2
// / \   / \
// 9   6 3   1

var invertTree = function(root) {
    if(!root) return root

    var temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.left)
    invertTree(root.right)

    return root
};
