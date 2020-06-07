import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
// import Responsive from '../common/Responsive';
import Tags from '../common/Tags';
import SubInfo from '../common/SubInfo';

const PostViewerBlock = styled.div`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.state === 404) {
      return <PostViewerBlock>Not Exist Post</PostViewerBlock>;
    }
    return <PostViewerBlock>Error Occurred!!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedData, tags } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedData}
          hasMarginTop
        ></SubInfo>
        <Tags tags={tags}></Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }}></PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
