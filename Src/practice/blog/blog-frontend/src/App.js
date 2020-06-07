import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Route path={['/@:username', '/']} component={PostListPage} exact></Route>
      <Route path="/login" component={LoginPage} exact></Route>
      <Route path="/register" component={RegisterPage} exact></Route>
      <Route path="/write" component={WritePage} exact></Route>
      <Route path="/@:username/:postId" component={PostPage} exact></Route>
    </div>
  );
}

export default App;
