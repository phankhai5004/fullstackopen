import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
	return (
		<div>
			{courses.map((course) => {
				return (
					<div>
						<Header course={course} />
						<Content course={course} />
					</div>
				);
			})}
		</div>
	);
};

export default Course;
