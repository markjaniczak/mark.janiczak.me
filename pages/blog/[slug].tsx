import ErrorPage from 'next/error';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { CustomLink, Layout, PostContent, PostHeader, Container } from '../../components';
import { getAllPosts, getPost } from '../../lib/api';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { useEffect } from 'react';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faLink);

const components = {
  a: CustomLink,
};

const Post = ({ source, frontMatter }: { source: string; frontMatter: { [key: string]: any } }) => {
  if (!source) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    dom.i2svg();
  });

  const content = hydrate(source, { components });

  return (
    <Layout>
      <Container>
        <PostHeader title={frontMatter.title} date={frontMatter.date} />
        <PostContent>{content}</PostContent>
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
    mdxOptions: {
      remarkPlugins: [
        [
          require('remark-behead'),
          {
            before: 0,
            depth: 1,
          },
        ],
        require('remark-slug'),
        [require('remark-toc'), {
					maxDepth: 2,
					skip: 'Table of Contents'
				}],
      ],
    },
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
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
