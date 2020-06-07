import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
//import PostViewer from '../components/post/PostViewer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import Responsive from '../components/common/Responsive';

const PostPage = () => {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <Responsive>
        <PostViewerContainer></PostViewerContainer>
      </Responsive>
    </div>
  );
};

export default PostPage;
