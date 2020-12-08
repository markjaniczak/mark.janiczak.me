import ErrorPage from "next/error";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { CustomLink, Layout, PostContent, PostHeader, Container } from "../../components";
import { getAllPosts, getPost } from "../../lib/api";
import matter from "gray-matter";
import yaml from "js-yaml";

const components = {
	a: CustomLink,
};

const Post = ({ source, frontMatter }: { source: string; frontMatter: { [key: string]: any } }) => {
	if (!source) {
		return <ErrorPage statusCode={404} />;
	}

	const content = hydrate(source, { components });

	return (
		<Layout>
            <Container>
                <PostHeader title={frontMatter.title} date={frontMatter.date} />
                <PostContent>
                    {content}
                </PostContent>
            </Container>
		</Layout>
	);
};

export const getStaticProps = async ({ params }) => {
	const source = getPost(params.slug);

	const { content, data } = matter(source, {
		engines: {
			yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
		},
	});

	const mdxSource = await renderToString(content, {
		components,
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = getAllPosts()
		.map((path) => path.replace(/\.mdx?$/, ""))
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};

export default Post;
