const Square = (props) => {

	const style = {
		width: "100px",
		height: "100px",
		background: "#141414",
		color: "white"
	}

	return(

		<button style={style}> {`${props.index[0]}, ${props.index[1]}`} </button>
	)
}

export default Square;

