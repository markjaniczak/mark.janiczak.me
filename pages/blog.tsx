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
				<h1>All Posts</h1>
				{posts.map((post, i) => (
					<PostPreview post={post} key={i} />
				))}
			</Container>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const posts = getAllPosts()
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => {
			const post = getPost(slug);

			const { data } = matter(post, {
				engines: {
					yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
				},
			});

			return {
                slug,
                ...data
            };
		});

	return {
		props: {
			posts,
		},
	};
};

export default Blog;
