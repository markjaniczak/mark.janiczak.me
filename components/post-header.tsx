import { format } from "date-fns";
import { DateTime } from "./date-time";

interface PostHeaderProps {
	title: string;
	date: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ title, date }) => {
	return (
		<div className="mb-8">
			<h1 className="text-2xl lg:text-4xl">{title}</h1>
			<DateTime date={date} />
		</div>
	);
};
