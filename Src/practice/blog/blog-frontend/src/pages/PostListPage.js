import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
//import PostList from '../components/post/PostList';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import Responsive from '../components/common/Responsive';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <Responsive>
        <PostListContainer></PostListContainer>
        <PaginationContainer></PaginationContainer>
      </Responsive>
    </div>
  );
};

export default PostListPage;
