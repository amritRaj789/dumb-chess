const Square = (props) => {
	const sumOfIndices = props.index[0] + props.index[1];
	const evenIndice = (sumOfIndices%2=== 0 ? true : false);
	const style = {
		width: "100px",
		height: "100px",
		background: (evenIndice ? "#141414" : "#AAA"),
		color: props.info.filled ? "white" : (evenIndice ? "#141414" : "#AAA"),
		border: "none",
		borderRadius: "5px",
		padding: "0",
		fontSize: "18px"
		// fontSize: (props.info.filled === true ? "18px" : "0px")
	}

	return(

		<button style={style} onClick={() => props.onButtonClick(props.info, props.index)}> {props.info.piece} </button>
	)
}

export default Square;

