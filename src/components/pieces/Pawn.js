export const movesForPawn = (passedArray) => {
	class calculateSquaresForPawn {
		constructor(arr){
			this.squares = arr;
		}

		calculateSquares = (obj, location) => {
			let array;
			const [row, col] = location;
			let squareArray = this.squares;


			//case : black pawn piece
			if(obj.color === "black"){
				//if pawns are at first row there are 2 pos. allowed
				if(row === 6){
					if(!squareArray[5][col].filled){
						if(squareArray[4][col].filled){
							array = [[5, col]];
						}
						else
							array = [[5, col], [4, col]];
					}
					else
						array = [[-1,-1]];
				}
				//if pawns are not at first row there is only one square allowed
				else{
					if(!squareArray[row-1][col].filled)
						array = [[row-1, col]];
					else
						array = [[-1,-1]];
				}
				//diagonal move to take opponent's piece
				if(squareArray[row-1][col-1] && squareArray[row-1][col-1].filled)
					array.push([row-1, col-1]);
				if(squareArray[row-1][col+1] && squareArray[row-1][col+1].filled)
					array.push([row-1, col+1]);
			}

			//case: white pawn piece
			else{
				if(row === 1){
					if(!squareArray[2][col].filled){
						if(squareArray[3][col].filled){
							array = [[2, col]];
						}
						else
							array = [[2, col], [3, col]];
					}
					else
						array = [[-1,-1]];
				}
				//if pawns are not at first row there is only one square allowed
				else{
					if(!squareArray[row+1][col].filled)
						array = [[row+1, col]];
					else
						array = [[-1,-1]];
				}
				if(squareArray[row+1][col-1] && squareArray[row+1][col-1].filled)
					array.push([row+1, col-1]);
				if(squareArray[row+1][col+1] && squareArray[row+1][col+1].filled)
					array.push([row+1, col+1]);
			}
			return array;
		}
	}

	const createdObj = new calculateSquaresForPawn(passedArray);
	return createdObj;
}

