import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

type Post = {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
};

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  useEffect(() => {
    fetch(
      'https://spacetraveling-nando.prismic.io/api/v2/documents/search?ref=YUdQZhUAACwAF0Fh#format=json'
    )
      .then(response => response.json())
      .then(data => console.log(data.next_page));
  }, []);

  return (
    <>
      <Head>
        <title>Início | spacetraveling</title>
      </Head>

      <main className={commonStyles.container}>
        <div className={styles.content}>
          {postsPagination.results.map(post => {
            return (
              <Link href={`/post/${post.uid}`} key={post.uid}>
                <a className={styles.postContent}>
                  <h1>{post.data.title}</h1>
                  <p>{post.data.subtitle}</p>
                  <div className={styles.postInfo}>
                    <time>
                      <AiOutlineCalendar />
                      <span>{post.first_publication_date}</span>
                      <MdPersonOutline />
                      <span>{post.data.author}</span>
                    </time>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <button type="button" className={commonStyles.buttonLoadMorePosts}>
          Carregar mais posts
        </button>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'posts'),
  ]);

  const results = postsResponse.results.map(post => {
    return {
      uid: post?.uid,
      first_publication_date: new Date(
        post.first_publication_date
      ).toLocaleDateString('pt-bt', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  const postsPagination = {
    results,
    next_page: postsResponse.next_page,
  };

  return {
    props: {
      postsPagination,
    },
  };
};
