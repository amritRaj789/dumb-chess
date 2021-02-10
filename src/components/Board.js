import React, {Component} from 'react';
import Square from './Square.js';
import './Board.css';

// pawn, knight, king, queen, bishop, rook
let squaresArray = new Array(8);
for(let i = 0; i <= 7; i++){
	squaresArray[i] = new Array(8).fill({filled: false});
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




class Board extends Component {

	constructor(){
		super();
		this.state = {
			squares: squaresArray,
			squareClicked: null
		}
	}

	onButtonClick = (info, index) => {
		console.log("info: ", info);
		console.log("index: ", index);
		//Case 1: Selecting a piece first time
		if(this.state.squareClicked === null && info.filled){
			// window.alert(`Hello this is a ${info.color} ${info.piece} piece`);
			this.setState({squareClicked: {
				color: info.color,
				piece: info.piece,
				index: index
			}})
		}

		//Case 2: Moving a piece to an empty square
		else if (this.state.squareClicked !== null && !info.filled){
			const tempSquares = [...this.state.squares];
			//updating the empty clicked square with previously selected piece info
			tempSquares[index[0]][index[1]] = {
				color: this.state.squareClicked.color,
				piece: this.state.squareClicked.piece,
				filled: true
			}
			const resetSquareObj = {filled: false}
			const resetSquareIndex = this.state.squareClicked.index;
			//removing the piece from its old location
			tempSquares[resetSquareIndex[0]][resetSquareIndex[1]] = resetSquareObj;
			//update the state
			this.setState({squares: tempSquares});
		}
		

	}

	
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
		else if(obj.piece === "knight1" || obj.piece === "knight2")
			return "knight"

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
