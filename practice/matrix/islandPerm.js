var islandPerimeter = function(grid) {
    var perm = 0;
    var height = grid.length;
    var width = grid[0].length;
    for(var y = 0; y<height; y++){
        for(var x = 0; x<width; x++){
            var count = 0;
            if(grid[y][x] == 1){
                if(y+1 < height && grid[y+1][x] == 1) count++;
                if(y-1 >= 0 && grid[y-1][x] == 1) count++;
                if(x+1 < width && grid[y][x+1] == 1) count++;
                if(x-1 >= 0 && grid[y][x-1] == 1) count++;
                perm += 4 - count
            }
        }
    }
    return perm
};
