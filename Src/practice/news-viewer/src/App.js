import React, { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
import NewsPage from './Pages/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
  return <Route path="/:category?" component={NewsPage}></Route>;
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  // return (
  //   <div>
  //     <Categories category={category} onSelect={onSelect}></Categories>
  //     <NewsList category={category}></NewsList>
  //   </div>
  // );
};

export default App;
