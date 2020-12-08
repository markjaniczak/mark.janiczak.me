import { join } from "path";
import fs from "fs";

const postsDirectory = join(process.cwd(), "_posts");

export const getAllPosts = () => {
	return fs.readdirSync(postsDirectory).filter((path) => /\.mdx?$/.test(path));
};

export const getPost = (slug: string) => {
	const postFilePath = join(postsDirectory, `${slug}.mdx`);
	return fs.readFileSync(postFilePath);
};
