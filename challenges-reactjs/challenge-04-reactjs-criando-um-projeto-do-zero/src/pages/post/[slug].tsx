import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

/* export default function Post({ post }: PostProps): JSX.Element {
  return (
    <>
      <Head>
        <title>teste | spacetraveling</title>
      </Head>
    </>
  );
} */

/* export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query();

  return {
    props: {
      posts,
    },
  };
  return {
    paths: [],
    fallback: 'blocking',
  };
}; */

/* export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();

  const { slug } = context.params;

  const response = await prismic.getByUID('posts', String(slug), {});

  console.log(slug);

  return {
    props: {},
  };
}; */
