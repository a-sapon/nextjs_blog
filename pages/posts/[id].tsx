import Layout from '../../components/Layout';
import Head from 'next/head';
import { Title, CommentTitle, PostSection, CommentListItem } from '../../components/styled-components/Main';
import { CommentsContainer } from '../../components/styled-components/Main';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import NewComment from '../../components/NewComment';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    body: string;
    id: number;
    comments: { body: string; id: number }[];
  };
}) {
  const [data, setData] = useState(postData);
  const [showComments, setShowComments] = useState(false);
  const [showNewCommentWindow, setShowNewCommentWindow] = useState(false);

  function toggleComments() {
    setShowComments(!showComments);
  }

  function writeNewComment() {
    setShowNewCommentWindow(!showNewCommentWindow);
  }

  function addComment(comment: {id: number, body: string}) {
    setData({...postData, comments: [...postData.comments, comment]})
  }

  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <PostSection>
        <Title>{data.title}</Title>
        <p>{data.body}</p>

        <>
          <CommentsContainer>
            <CommentTitle onClick={writeNewComment}>Comment</CommentTitle>
            {data.comments.length !== 0 && (
              <CommentTitle onClick={toggleComments}>[ {data.comments.length} ] Comment(s)</CommentTitle>
            )}
          </CommentsContainer>

          {showComments && (
            <ul>
              {data.comments.map((comment) => (
                <CommentListItem key={comment.id}>{comment.body}</CommentListItem>
              ))}
            </ul>
          )}

          {showNewCommentWindow && <NewComment onWriteNewComment={writeNewComment} onToggleComments={toggleComments} addComment={addComment} />}
        </>
      </PostSection>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://simple-blog-api.crew.red/posts/${params!.id}?_embed=comments`
  );
  const postData = res.data;
  return { props: { postData } };
};
