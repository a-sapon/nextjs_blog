import Layout from '../../components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import {
  Title,
  PostSection,
  PostForm,
  PostInput,
  PostTextArea,
  SendBtn,
} from '../../components/styled-components/Main';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBody(e.target.value);
  }

  async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPost = { title, body };
    if (newPost.title !== '' && newPost.body !== '') {
      try {
        await axios({
          method: 'post',
          url: 'https://simple-blog-api.crew.red/posts',
          data: JSON.stringify(newPost),
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        console.log(err);
      }

      Router.push('/');
      setTitle('');
      setBody('');
    }
  }

  return (
    <Layout>
      <Head>
        <title>New Post</title>
      </Head>
      <PostSection>
        <Title>Write a new post</Title>
        <PostForm onSubmit={handleSumbit}>
          <PostInput
            value={title}
            onChange={handleInputChange}
            type='text'
            placeholder='Topic...'
          ></PostInput>
          <PostTextArea
            value={body}
            onChange={handleTextAreaChange}
          ></PostTextArea>
          <SendBtn type='submit'>Send</SendBtn>
        </PostForm>
      </PostSection>
    </Layout>
  );
}
