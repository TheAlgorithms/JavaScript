//https://leetcode.com/problems/rotting-oranges/

/* You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1. */


var dx = [-1,0,+1,0];
var dy = [0,-1,0,+1];
var orangesRotting = function(grid) {
    var X = grid[0].length;
    var Y = grid.length;
    var queue=[];
    var map={};
    var rotten;
    var ans = 0;
    for(var x = 0; x < X; x++){
        for(var y = 0; y < Y; y++){
           if(grid[y][x] == 2){
               queue.push(y*X+x);
               map[y*X+x]=0;
           } 
        }
    }
    while((rotten = queue.shift())!=undefined){
        var x = rotten % X;
        var y = Math.floor(rotten / X);
        for(var i = 0; i < 4; i++){
            var mx = x+dx[i];
            var my = y+dy[i];
            if(mx >= 0 && mx < X && my >= 0 && my <Y && grid[my][mx] == 1){
                grid[my][mx] = 2;
                queue.push((mx)+(my)*X);
                map[(mx)+(my)*X] = map[x+y*X]+1;
                ans = map[mx+my*X];
            }
        }
    }
    for(var x = 0; x < X; x++){
        for(var y = 0; y < Y; y++){
            if(grid[y][x] == 1)
                return -1;
        }
    }
    return ans;
};