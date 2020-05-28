import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  color: #262626;
  padding-left: 40px;
`;

export const CommentTitle = styled.h2`
  font-size: 18px;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  color: #262626;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostSection = styled.section`
  width: 60vw;
  margin: 0 auto;
  text-align: justify;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  color: #262626;
  line-height: 24px;
`;

export const PostsListItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
`;

export const GenericLink = styled.a`
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  color: #262626;
  &:hover {
    color: #8080ff;
  }
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
`;

export const PostTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  resize: none;
`;

export const SendBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #8080ff;
  color: #ffffff;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #9999ff;
  }
  &:active {
    background-color: #8080ff;
  }
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid #262626;
  border-radius: 3px;
  background-color: transparent;
  color: #262626;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CommentListItem = styled.li`
  width: max-content;
  list-style: none;
  margin-bottom: 10px;
  padding: 12px 40px;
  background-color: #ebedf0;
  border-radius: 30px;
`;
