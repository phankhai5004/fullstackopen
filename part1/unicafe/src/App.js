import { useState } from "react";

const Header = ({ text }) => {
	return <h1>{text}</h1>;
};

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ text, value }) => {
	let notation = "";
	if (text == "positive") {
		notation = "%";
	}
	return (
		<table>
			<thead></thead>
			<tbody>
				<tr>
					<td>{text}</td>
					<td>
						{value} {notation}
					</td>
				</tr>
			</tbody>
			<tfoot></tfoot>
		</table>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;
	const average = (good + bad) / 3;
	const positive = (good * 100) / all;

	if (all == 0) {
		return <p>No feedback given</p>;
	}
	return (
		<div>
			<Header text="statistics" />
			<StatisticsLine text="good" value={good} />
			<StatisticsLine text="neutral" value={neutral} />
			<StatisticsLine text="bad" value={bad} />
			<StatisticsLine text="all" value={all} />
			<StatisticsLine text="average" value={average} />
			<StatisticsLine text="positive" value={positive} />
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const increaseGood = () => {
		return setGood(good + 1);
	};

	const increaseNeutral = () => {
		return setNeutral(neutral + 1);
	};

	const increaseBad = () => {
		return setBad(bad + 1);
	};

	return (
		<div>
			<Header text="give feedback" />
			<Button handleClick={increaseGood} text="good" />
			<Button handleClick={increaseNeutral} text="neutral" />
			<Button handleClick={increaseBad} text="bad" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
