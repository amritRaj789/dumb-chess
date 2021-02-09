import React, {Component} from 'react';
import Square from './Square.js';
import './Board.css';

// pawn, knight, king, queen, bishop, rook
let squaresArray = new Array(8);
for(let i = 0; i <= 7; i++){
	squaresArray[i] = new Array(8).fill(0);
}

class Board extends Component {

	constructor(){
		super();
		this.state = {
			squares: squaresArray
		}
	}

	render(){
		return(
			<div className="board">
			{this.state.squares.map((row, rowIndex) => {
				return <div>{row.map((element, colIndex ) => <Square key={[rowIndex, colIndex]} info={element} index={[rowIndex, colIndex]}/>)}</div>
			})}
			</div>
		)
	}

}


squaresArray[0][0] = {
	color: "white",
	piece: "rook1"
}
squaresArray[0][1] = {
	color: "white",
	piece: "knight1"
}
squaresArray[0][2] = {
	color: "white",
	piece: "bishop1"
}
squaresArray[0][3] = {
	color: "white",
	piece: "king"
}
squaresArray[0][4] = {
	color: "white",
	piece: "queen"
}
squaresArray[0][5] = {
	color: "white",
	piece: "bishop2"
}
squaresArray[0][6] = {
	color: "white",
	piece: "knight2"
}
squaresArray[0][7] = {
	color: "white",
	piece: "rook2"
}
squaresArray[7][0] = {
	color: "black",
	piece: "rook1"
}
squaresArray[7][1] = {
	color: "black",
	piece: "knight1"
}
squaresArray[7][2] = {
	color: "black",
	piece: "bishop1"
}
squaresArray[7][3] = {
	color: "black",
	piece: "king"
}
squaresArray[7][4] = {
	color: "black",
	piece: "queen"
}
squaresArray[7][5] = {
	color: "black",
	piece: "bishop2"
}
squaresArray[7][6] = {
	color: "black",
	piece: "knight2"
}
squaresArray[7][7] = {
	color: "black",
	piece: "rook2"
}
for(let i = 0; i <= 7; i++){
	squaresArray[6][i] = {
		color: "black",
		piece: `pawn${i+1}`
	}
}
for(let i = 0; i <= 7; i++){
	squaresArray[1][i] = {
		color: "white",
		piece: `pawn${i+1}`
	}
}


export default Board;