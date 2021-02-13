// the make-up of the board is 8x8 row from 0 to 7 (top to bottom) and col from 0 to 7 (left to right)

export const movesForRook = (passedArray) => {

	class calculateSquaresForRook {
		constructor(arr){
			this.squares = arr;
		}

		calculateSquares = (location) => {
			let array = [[-1,-1]];
			let curRow;
			let curCol;
			const [row, col] = location;
			let squareArray = this.squares;

			// move up
			curRow = row+1;
			curCol = col;
			while(this.checkIndexLimit(curRow, curCol)  && !squareArray[curRow][curCol].filled){
				array.push([curRow, curCol]);
				curRow++;
			}
			// move down
			curRow = row-1;
			curCol = col;
			while(this.checkIndexLimit(curRow, curCol) && !squareArray[curRow][curCol].filled){
				array.push([curRow, curCol]);
				curRow--;
			}
			// move left
			curRow = row;
			curCol = col-1;
			while(this.checkIndexLimit(curRow, curCol) && !squareArray[curRow][curCol].filled){
				array.push([curRow, curCol]);
				curCol--;
			}
			// move right
			curRow = row;
			curCol = col+1;
			while(this.checkIndexLimit(curRow, curCol) && !squareArray[curRow][curCol].filled){
				array.push([curRow, curCol]);
				curCol++;
			}

			return array;
		}

		checkIndexLimit = (row, col) => {
			if(row <= 7 && row >= 0){
				if(col <= 7 && col >= 0)
					return true
			}
			return false;
		}
	}

	const createdObj = new calculateSquaresForRook(passedArray);
	return createdObj;
}





