export const movesForKnight = (passedArray) => {

	class calculateSquaresForKnight {
		constructor(arr){
			this.squares = arr;
		}

		calculateSquares = (location) => {
			let array = [[-1,-1]];
			let curRow;
			let curCol;
			const [row, col] = location;
			let squareArray = this.squares;
			
			if(this.checkIndexLimit(row+2, col+1))
				array.push([row+2, col+1]);
			if(this.checkIndexLimit(row+2, col-1))
				array.push([row+2, col-1]);
			if(this.checkIndexLimit(row-2, col+1))
				array.push([row-2, col+1]);
			if(this.checkIndexLimit(row-2, col-1))
				array.push([row-2, col-1]);
			if(this.checkIndexLimit(row+1, col+2))
				array.push([row+1, col+2]);
			if(this.checkIndexLimit(row+1, col-2))
				array.push([row+1, col-2]);
			if(this.checkIndexLimit(row-1, col+2))
				array.push([row-1, col+2]);
			if(this.checkIndexLimit(row-1, col-2))
				array.push([row-1, col-2]);

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

	const createdObj = new calculateSquaresForKnight(passedArray);
	return createdObj;
}