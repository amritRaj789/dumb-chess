import React, {Component} from 'react';
import Square from './Square.js';
import './Board.css';

class Board extends Component {

	constructor(){
		super();
		this.state = {
			squares: new Array(8),
		}
		let squares = this.state.squares;
		for(let i = 0; i <= 7; i++){
			squares[i] = new Array(8).fill(0);
		}
		this.setState({squares: squares});
		// initializeBoard();
	}
	

	render(){
		return(
			<div className="board">
			{this.state.squares.map((row, rowIndex) => {
				return <div className={`row${rowIndex}`}>{row.map((element, colIndex ) => <Square key={[rowIndex, colIndex]} index={[rowIndex, colIndex]}/>)}</div>
			})}
			</div>
		)
	}

}

export default Board;