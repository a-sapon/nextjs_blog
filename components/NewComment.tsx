import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  PostForm,
  PostTextArea,
  CommentsContainer,
  SendBtn,
  CancelBtn,
} from './styled-components/Main';

export default function NewComment({
  onWriteNewComment, onToggleComments, addComment
}: {
  onWriteNewComment: () => void;
  onToggleComments: () => void;
  addComment: (comment: {postId: number, body: string}) => void;
}) {
  const [body, setBody] = useState('');
  const router = useRouter();

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBody(e.target.value);
  }

  async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const comment = { postId: Number(router.query.id), body };
    if (comment.body !== '') {
      try {
        await axios({
          method: 'post',
          url: 'https://simple-blog-api.crew.red/comments',
          data: JSON.stringify(comment),
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        console.log(err);
      }
      addComment(comment);
      onWriteNewComment();
      onToggleComments();
    }
  }

  return (
    <PostForm onSubmit={handleSumbit}>
      <PostTextArea value={body} onChange={handleTextAreaChange}></PostTextArea>
      <CommentsContainer>
        <CancelBtn onClick={onWriteNewComment}>Cancel</CancelBtn>
        <SendBtn type='submit'>Send</SendBtn>
      </CommentsContainer>
    </PostForm>
  );
}
