//for input n= the desired output should be
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]


function matrix(n) {
	var result = [];
	for(let i=0;i<n;i++){
	 	result.push([]);
	}

	var startRow = 0;
	var endRow = n-1;
	var startCol = 0;
	var endCol = n-1;

	var counter = 1;

	while(startRow<=endRow && startCol<=endCol){
		// this is for the top row
		for(let i=startCol;i<=endCol;i++){
			result[startRow][i] = counter;
			counter+=1;
		}
		startRow++;
		// this is end col
		for(let j=startRow;j<=endRow;j++){
			result[j][endCol] = counter;
			counter+=1;
		}
		endCol--;
		//this is for last row
		for(let i=endCol;i>=startCol;i--){
			result[endRow][i] = counter;
			counter+=1;
		}
		endRow--;
		//this is for first col
		for(let j=endRow;j>=startRow;j--){
			result[j][startCol] = counter;
			counter+=1;
		}
		startCol++;
	}
	for(var i=0;i<n;i++){
				console.log(result[i]);
	}
	return result;
}
