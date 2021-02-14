import React, {Component} from 'react';
import Square from './Square.js';
import './Board.css';
import {movesForPawn} from './pieces/Pawn';
import {movesForRook} from './pieces/Rook';
import {movesForBishop} from './pieces/Bishop';
import {movesForQueen} from './pieces/Queen';
import {movesForKing} from './pieces/King';
import {movesForKnight} from './pieces/Knight';
import {squaresArray} from './InitializeBoard';




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
		// Check if the destination square is valid as per the piece's movement rules
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
			const resetSquareObj = {filled: false, color: "none", piece: "abcd"};
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
		if(piece === "pawn"){
			const movesForPawnObj = movesForPawn(this.state.squares);
			array = movesForPawnObj.calculateSquares(obj, location);
		}
		else if(piece === "rook"){
			array = movesForRook(this.state.squares).calculateSquares(location);
		}
		else if(piece === "bishop"){
			array = movesForBishop(this.state.squares).calculateSquares(location);
		}
		else if(piece === "queen"){
			array = movesForQueen(this.state.squares).calculateSquares(location);
		}
		else if(piece === "king"){
			array = movesForKing(this.state.squares).calculateSquares(location);
		}
		else if(piece === "knight"){
			array = movesForKnight(this.state.squares).calculateSquares(location);
		}
		this.setState({squaresAllowed: array});
		return;
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
