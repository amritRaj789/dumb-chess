const Square = (props) => {
	const sumOfIndices = props.index[0] + props.index[1];
	const style = {
		width: "100px",
		height: "100px",
		background: ((sumOfIndices%2 === 0) ? "#141414" : "#AAA"),
		color: "white"
	}

	return(

		<button style={style}> {props.info.piece} </button>
	)
}

export default Square;

// {`${props.index[0]}, ${props.index[1]}`}