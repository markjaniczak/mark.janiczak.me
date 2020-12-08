import { format } from "date-fns";
import Link from "next/link";
import { Post } from "../types/post";
import { DateTime } from "./date-time";

interface PostPreviewProps {
	post: Post;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
	const { slug, title, date, description } = post;

	return (
		<Link href={`/blog/${slug}`} passHref>
			<a>
				<div className="grid grid-rows-2">
					<div className="flex flex-col lg:flex-row items-baseline">
						<h2 className="flex-grow mr-2">{title}</h2>
						<DateTime date={date} />
					</div>
					<p>{description}</p>
				</div>
			</a>
		</Link>
	);
};
