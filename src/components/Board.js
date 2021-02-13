import React, {Component} from 'react';
import Square from './Square.js';
import './Board.css';

// pawn, knight, king, queen, bishop, rook
let squaresArray = new Array(8);
for(let i = 0; i <= 7; i++){
	squaresArray[i] = new Array(8).fill({filled: false, color: "none", piece: "abcd"});
}



// For the initial rendering of the 32 pieces
squaresArray[0][0] = {
	color: "white",
	piece: "rook1",
	filled: true
}
squaresArray[0][1] = {
	color: "white",
	piece: "knight1",
	filled: true

}
squaresArray[0][2] = {
	color: "white",
	piece: "bishop1",
	filled: true
}
squaresArray[0][3] = {
	color: "white",
	piece: "king",
	filled: true
}
squaresArray[0][4] = {
	color: "white",
	piece: "queen",
	filled: true
}
squaresArray[0][5] = {
	color: "white",
	piece: "bishop2",
	filled: true
}
squaresArray[0][6] = {
	color: "white",
	piece: "knight2",
	filled: true
}
squaresArray[0][7] = {
	color: "white",
	piece: "rook2",
	filled: true
}
squaresArray[7][0] = {
	color: "black",
	piece: "rook1",
	filled: true
}
squaresArray[7][1] = {
	color: "black",
	piece: "knight1",
	filled: true
}
squaresArray[7][2] = {
	color: "black",
	piece: "bishop1",
	filled: true
}
squaresArray[7][3] = {
	color: "black",
	piece: "king",
	filled: true
}
squaresArray[7][4] = {
	color: "black",
	piece: "queen",
	filled: true
}
squaresArray[7][5] = {
	color: "black",
	piece: "bishop2",
	filled: true
}
squaresArray[7][6] = {
	color: "black",
	piece: "knight2",
	filled: true
}
squaresArray[7][7] = {
	color: "black",
	piece: "rook2",
	filled: true
}
for(let i = 0; i <= 7; i++){
	squaresArray[6][i] = {
		color: "black",
		piece: `pawn${i+1}`,
		filled: true
	}
}
for(let i = 0; i <= 7; i++){
	squaresArray[1][i] = {
		color: "white",
		piece: `pawn${i+1}`,
		filled: true
	}
}

const indexInArray = (index, array) => {
	for(let element of array){
		if(index[0] === element[0] && index[1] === element[1])
			return true;
	}
	return false;
}


class Board extends Component {

	constructor(){
		super();
		this.state = {
			squares: squaresArray,
			squareClicked: null,
			squaresAllowed: []
		}
	}

	onButtonClick = (info, index) => {
		console.log("info: ", info);
		console.log("index: ", index);
		//Case 1: Selecting a piece first time
		if(this.state.squareClicked === null && info.filled){
			this.setState({squareClicked: {
				color: info.color,
				piece: info.piece,
				index: index
			}});
			this.calculateSquaresAllowed(info, index);
			return;
		}
		if(!(indexInArray(index, this.state.squaresAllowed))){
			this.setState({squareClicked: null});
			this.setState({squaresAllowed: []})
			return
		}

		//Case 2: Moving a piece to an empty square
		if (this.state.squareClicked !== null && !info.filled){
			const tempSquares = [...this.state.squares];
			//updating the empty clicked square with previously selected piece info
			tempSquares[index[0]][index[1]] = {
				color: this.state.squareClicked.color,
				piece: this.state.squareClicked.piece,
				filled: true
			}
			const resetSquareObj = {filled: false, color: "none", piece: "abcd"}
			const resetSquareIndex = this.state.squareClicked.index;
			//removing the piece from its old location
			tempSquares[resetSquareIndex[0]][resetSquareIndex[1]] = resetSquareObj;
			//update the state
			this.setState({squares: tempSquares});

			// Updating the sqaureClicked state to null
			this.setState({squareClicked: null});

		}

		// Case 3: Moving a piece to an occupied square
		else if(this.state.sqaureClicked !== null && info.filled){

			//case a: pieces are of same color
			if(info.color === this.state.squareClicked.color){
				this.setState({squareClicked: null});
			}

			//case b: pieces are of different color
			else {
				const tempSquares = [...this.state.squares];
				//updating the empty clicked square with previously selected piece info
				tempSquares[index[0]][index[1]] = {
					color: this.state.squareClicked.color,
					piece: this.state.squareClicked.piece,
					filled: true
				}
				const resetSquareObj = {filled: false, color: "none", piece: "abcd"}
				const resetSquareIndex = this.state.squareClicked.index;
				//removing the piece from its old location
				tempSquares[resetSquareIndex[0]][resetSquareIndex[1]] = resetSquareObj;
				//update the state
				this.setState({squares: tempSquares});

				// Updating the sqaureClicked state to null
				this.setState({squareClicked: null});
			}
		}
	}

	calculateSquaresAllowed = (obj, location) => {
		const piece = this.checkPieceType(obj);
		let array;
		const [row, col] = location;
		if(piece === "pawn"){
			//case : black pawn piece
			if(obj.color === "black"){
				//if pawns are at first row there are 2 pos. allowed
				if(row === 6){
					if(!this.state.squares[5][col].filled){
						if(this.state.squares[4][col].filled){
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
					if(!this.state.squares[row-1][col].filled)
						array = [[row-1, col]];
					else
						array = [[-1,-1]];
				}
			}

			//case: white pawn piece
			else{
				if(row === 1){
					if(!this.state.squares[2][col].filled){
						if(this.state.squares[3][col].filled){
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
					if(!this.state.squares[row+1][col].filled)
						array = [[row+1, col]];
					else
						array = [[-1,-1]];
				}
			}
		}
		this.setState({squaresAllowed: array});
		return;
	}

/*	checkIfSquareFilled = (location) => {
		if(this.state.squares[location[0]][location[1]].filled)
	}*/

	checkPieceType = (obj) => {
		if(obj.piece === "rook1" || obj.piece === "rook2")
			return "rook"
		else if(obj.piece === "knight1" || obj.piece === "knight2")
			return "knight"
		else if(obj.piece === "bishop1" || obj.piece === "bishop2")
			return "bishop"
		else if(obj.piece === "king")
			return "king"
		else if(obj.piece === "queen")
			return "queen"
		else 
			return "pawn"

	}

	render(){
		return(
			<div className="board">
			{this.state.squares.map((row, rowIndex) => {
				return (
					<div className="row">
						{row.map((element, colIndex ) => <Square key={[rowIndex, colIndex]} info={element} onButtonClick={this.onButtonClick} index={[rowIndex, colIndex]}/>)}
					</div>
				)
			})}
			</div>
		)
	}

}

export default Board;
