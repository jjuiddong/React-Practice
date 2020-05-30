import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise( () => {
        const apiKey = 'd5866808eaf2447580d557950c2bb84f';
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}` +
            '&apiKey=' +
            apiKey,
        );
    }, [category]);

  if (loading) {
    return <NewsListBlock>Loading..</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  const {articles} = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
