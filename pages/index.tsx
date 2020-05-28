import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  Title,
  PostsListItem,
  GenericLink,
} from '../components/styled-components/Main';
import { GetServerSideProps } from 'next';
import axios from 'axios';

export default function Home({
  data,
}: {
  data: {
    title: string;
    body: string;
    id: number;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>Blog</title>
      </Head>
      <section>
        <Title>Check out the latest posts!</Title>
        <ul>
          {data.map(({ id, title }) => (
            <PostsListItem key={id}>
              <Link
                href='/posts/[id]?_embed=comments'
                as={`/posts/${id}?_embed=comments`}
              >
                <GenericLink>{title}</GenericLink>
              </Link>
            </PostsListItem>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(`https://simple-blog-api.crew.red/posts`);
  const data = await res.data;

  return { props: { data } };
};
