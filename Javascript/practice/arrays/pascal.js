// Pascal's Triangle

// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
    var triangle = [];
    for(var row = 1; row <= numRows; row++){
        var newArr = [];
        for(var idx = 0; idx<row; idx++){
            if(idx==0 || idx == row-1){
                newArr.push(1)
            } else {
                newArr[idx] = triangle[row-2][idx] + triangle[row-2][idx-1];
            }
        }
        triangle.push(newArr)
    }
    return triangle
};

// Pascal pt 2

// Given an index k, return the kth row of the Pascal's triangle.
//
// For example, given k = 3,
// Return [1,3,3,1].

var getRow = function(rowIndex) {
    var triangle=[];
    for(var row = 1; row <= rowIndex+1; row++){
        var newArr = [];
        for(var idx = 0; idx<row; idx++){
            if(idx==0 || idx == row-1){
                newArr.push(1);
            } else {
                newArr[idx] = triangle[row-2][idx] + triangle[row-2][idx-1];
            }
        }
        triangle.push(newArr)
    }
    return triangle[rowIndex]
};
