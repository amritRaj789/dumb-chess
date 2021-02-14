// pawn, knight, king, queen, bishop, rook
export const squaresArray = new Array(8);
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