// the make-up of the board is 8x8 row from 0 to 7 (top to bottom) and col from 0 to 7 (left to right)

export const movesForRook = (passedArray) => {

	class calculateSquaresForRook {
		constructor(arr){
			this.squares = arr;
		}

		calculateSquares = (location) => {
			let array = [[-1,-1]];;
			const [row, col] = location;
			let squareArray = this.squares;

			// move up
			let currentRow = row+1;
			let currentCol = col;
			while(squareArray[currentRow][currentCol] && !squareArray[currentRow][currentCol].filled){
				array.push([currentRow, currentCol]);
				currentRow++;
			}
			// move down
			let currentRow = row-1;
			let currentCol = col;
			while(squareArray[currentRow][currentCol] && !squareArray[currentRow][currentCol].filled){
				array.push([currentRow, currentCol]);
				currentRow--;
			}
			// move left
			let currentRow = row;
			let currentCol = col-1;
			while(squareArray[currentRow][currentCol] && !squareArray[currentRow][currentCol].filled){
				array.push([currentRow, currentCol]);
				currentCol--;
			}
			// move right
			let currentRow = row;
			let currentCol = col+1;
			while(squareArray[currentRow][currentCol] && !squareArray[currentRow][currentCol].filled){
				array.push([currentRow, currentCol]);
				currentCol++;
			}

			return array;
		}
	}

	const createdObj = new calculateSquaresForRook(passedArray);
	return createdObj;
}





