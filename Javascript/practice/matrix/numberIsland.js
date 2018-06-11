// Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
// 11110
// 11010
// 11000
// 00000
// Answer: 1
//
// Example 2:
//
// 11000
// 11000
// 00100
// 00011
// Answer: 3


var numIslands = function(grid) {
    if(grid.length == 0){
        return 0
    }
    var height = grid.length;
    var width = grid[0].length;
    var sum = 0;
    var clean = function(i, j){
        if(i>=0 && i<height && j>=0 && j<width && grid[i][j] == '1'){
            grid[i][j] = '0';
            clean(i+1, j);
            clean(i-1, j);
            clean(i, j+1);
            clean(i, j-1)
        }
    }
    for(var i = 0; i<height; i++){
        for(var j = 0; j<width; j++){
           if(grid[i][j]=='1'){
               clean(i,j)
               sum++
               console.log('done')
           }
        }
    }
    return sum
};
