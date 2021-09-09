import { GetStaticProps } from 'next';
import Head from 'next/head';

import { AiOutlineCalendar } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Início | spacetraveling</title>
      </Head>

      <main className={commonStyles.container}>
        <div className={styles.content}>
          <h1>Criação de arquivos SCSS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.postInfo}>
            <time>
              <AiOutlineCalendar />
              <span>16 de setembro 2021</span>
              <MdPersonOutline />
              <span>Fernando Butzke</span>
            </time>
          </div>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const prismic = getPrismicClient();
//   const postsResponse = await prismic.query();
//
//   return {
//     props: {
//       postsResponse
//     }
//   }
// };
