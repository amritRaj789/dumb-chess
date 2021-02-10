const Square = (props) => {
	const sumOfIndices = props.index[0] + props.index[1];
	const style = {
		width: "100px",
		height: "100px",
		background: ((sumOfIndices%2 === 0) ? "#141414" : "#AAA"),
		color: "white",
		fontSize: "18px",
		border: "none",
		borderRadius: "5px",
	}

	return(

		<button style={style} onClick={() => props.onButtonClick(props.info, props.index)}> {props.info.piece} </button>
	)
}

export default Square;

// {`${props.index[0]}, ${props.index[1]}`}