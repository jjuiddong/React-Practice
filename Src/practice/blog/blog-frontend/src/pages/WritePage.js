import React from 'react';
import Responsive from '../components/common/Responsive';
//import Editor from '../components/write/Editor';
//import TagBox from '../components/write/TagBox';
//import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonContainer';
import {Helmet} from 'react-helmet-async';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>Write Post - REACTERS</title>
      </Helmet>
      <EditorContainer></EditorContainer>
      <TagBoxContainer></TagBoxContainer>
      <WriteActionButtonsContainer></WriteActionButtonsContainer>
    </Responsive>
  );
};

export default WritePage;
