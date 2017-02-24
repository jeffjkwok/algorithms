function commonAncestor(pair, list){
    var first = [];
    var second = [];
    findParent(list, pair[0], first)
    findParent(list, pair[1], second)
    for(var idx = 0; idx< first.length; idx++){
        findParent(list, first[idx], first)
    }
    for(var idx = 0; idx< second.length; idx++){
        findParent(list, second[idx], second)
    }
    var mySet = new Set(first);
    for(var x = 0; x < second.length; x++){
        if(mySet.has(second[x])){
            return true
        }
    }
    return false
}


function findParent(list, value, arr){
    var noValue = true;
    for(var idx = 0; idx < list.length; idx++){
        if(list[idx][1] == value){
            arr.push(list[idx][0])
            noValue = false;
        }
    }
    return noValue
}

// /*
//
// Write a function that, for two given individuals in our dataset, returns true if and only if they share at least one known ancestor.
//
// var parentChildPairs =
//     [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
//      [4, 5], [4, 8], [8, 9]];
//
//
//
//  1   2     4
//   \ /     / \
//    3     5   8
//     \   / \   \
//      \ /   \   9
//       6     7
//
// Sample input and output:
// [3, 8] => false
// [5, 8] => true
// [5, 9] => true
//
// */

function childParent(list){
    var parents = {}
    var child = {}
    for(var idx = 0; idx< list.length; idx++){
        if(list[idx][0] in parents){
            parents[list[idx][0]]++
        } else {
            parents[list[idx][0]] = 1
        }
        if(list[idx][1] in child){
            child[list[idx][1]]++
        } else {
            child[list[idx][1]] = 1
        }
    }
    var noPar = []
    for(var key in parents){
        if(!(key in child)){
            noPar.push(key)
        }
    }
    var onePar = []
    for(var key in child){
        if(child[key] == 1){
            onePar.push(key)
        }
    }
    return [noPar, onePar]
}

list = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],[4, 5], [4, 8], [8, 9]]

childParent(list)

console.log(commonAncestor([3,8], list));
// Your previous Markdown content is preserved below:
//
//
// Suppose we have some input data describing relationships between parents and children. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.
//
// parentChildPairs =
//     [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],[4, 5], [4, 8], [8, 9]]
//
//
// For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
//
//  1   2     4
//   \ /     / \
//    3     5   8
//     \   / \   \
//      \ /   \   9
//       6     7
//
// Write a function that takes this data as input and outputs two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.
//
// Sample output:
// Zero parents: 1, 2, 4
// One parent: 5, 7, 8, 9
//
//
//
// Below is some sample data in JavaScript and Java. Feel free to solve this problem in any language of your choice.
//
//
// // JavaScript
// var parentChildPairs =
//     [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
//      [4, 5], [4, 8], [8, 9]];
//
// // Java
// int[][] parentChildPairs = new int[][] {
//     {1, 3}, {2, 3}, {3, 6}, {5, 6}, {5, 7},
//     {4, 5}, {4, 8}, {8, 9}
// };
//
