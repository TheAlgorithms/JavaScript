var wiggleSort = function(nums) {
    nums.sort(function(a, b) { return a - b; });
    var mid = Math.floor((nums.length-1)/2);
    
    var left = new Array(mid+1);
    var right = new Array(nums.length-mid-1);
    for(let i = 0; i < left.length; i++) {
        left[i] = nums[i];
    }
    for(let j = 0; j < right.length; j++) {
        right[j] = nums[mid+1+j];
    }
    left.sort(function(a, b) { return b - a; });
    right.sort(function(a, b) { return b - a; });
    
    var turn = 'left';
    var i = 0;
    var low = 0;
    var high = 0;
    while(low < left.length || high < right.length) {
        if(turn === 'left') {
            nums[i] = left[low];
            turn = 'right';
            i++;
            low++;
        }
        else {
            nums[i] = right[high];
            turn = 'left';
            i++;
            high++;
        }
    }
    return nums;
};
