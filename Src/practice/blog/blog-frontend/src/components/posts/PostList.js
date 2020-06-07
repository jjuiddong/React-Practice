import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import Tags from '../common/Tags';
import SubInfo from '../common/SubInfo';

const PostListBlock = styled.div`
  margin-top: 3rem;
`;
const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  /* first line */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo username={user.username}
       publishedDate={new Date(publishedDate)}>
        <span>username</span>
        <span>{new Date().toLocaleDateString()}</span>
      </SubInfo>
      <Tags tags={tags}></Tags>
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>Error Occurred!!</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            New Post
          </Button>
        )}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id}></PostItem>
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
