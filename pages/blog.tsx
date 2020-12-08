import matter from "gray-matter";
import { Container, Layout, PostPreview } from "../components";
import { getAllPosts, getPost } from "../lib/api";
import { Post } from "../types/post";
import yaml from "js-yaml";

interface BlogProps {
	posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
	return (
		<Layout>
			<Container>
				<h1 className="mb-8 text-4xl">All Posts</h1>
				<div className="grid grid-flow-row gap-4">
					{posts.map((post, i) => (
						<PostPreview post={post} key={i} />
					))}
				</div>
			</Container>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const posts = getAllPosts()
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => {
			const source = getPost(slug);

			const { data } = matter(source, {
				engines: {
					yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
				},
			});

			const post: Post = {
				slug,
				...(data as Omit<Post, "slug">),
			};

			return post;
		})
		.sort(({ date: dateA }, { date: dateB }) => (dateA > dateB ? -1 : 1));

	return {
		props: {
			posts,
		},
	};
};

export default Blog;
