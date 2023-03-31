const Total = ({ parts }) => {
	return (
		<p>
			<b>total of </b>
			{parts.reduce((prev, curr) => prev + curr.exercises, 0)}
		</p>
	);
};

export default Total;
