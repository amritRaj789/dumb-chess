export const movesForBishop = (passedArray) => {

	class calculateSquaresForBishop {
		constructor(arr){
			this.squares = arr;
		}

		calculateSquares = (location) => {
			let array = [[-1,-1]];
			let curRow;
			let curCol;
			const [row, col] = location;
			let squareArray = this.squares;

			// move up-left
			curRow = row+1;
			curCol = col-1;
			while(this.checkIndexLimit(curRow, curCol)){
				if(squareArray[curRow][curCol].filled){
					array.push([curRow, curCol]);
					break;
				}
				array.push([curRow, curCol]);
				curRow++;
				curCol--;
			}
			// move up-right
			curRow = row+1;
			curCol = col+1;
			while(this.checkIndexLimit(curRow, curCol)){
				if(squareArray[curRow][curCol].filled){
					array.push([curRow, curCol]);
					break;
				}
				array.push([curRow, curCol]);
				curRow++;
				curCol++;
			}
			// move down-left
			curRow = row-1;
			curCol = col-1;
			while(this.checkIndexLimit(curRow, curCol)){
				if(squareArray[curRow][curCol].filled){
					array.push([curRow, curCol]);
					break;
				}
				array.push([curRow, curCol]);
				curCol--;
				curRow--;
			}
			// move down-right
			curRow = row-1;
			curCol = col+1;
			while(this.checkIndexLimit(curRow, curCol)){
				if(squareArray[curRow][curCol].filled){
					array.push([curRow, curCol]);
					break;
				}
				array.push([curRow, curCol]);
				curCol++;
				curRow--;
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

	const createdObj = new calculateSquaresForBishop(passedArray);
	return createdObj;
}