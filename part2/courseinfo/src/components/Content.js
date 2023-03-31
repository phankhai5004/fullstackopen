import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {
	return (
		<div>
			{course.parts.map((part) => {
				return <Part key={part.id} part={part} />;
			})}
			<Total parts={course.parts} />
		</div>
	);
};

export default Content;
