import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(
  <CommentBox
    url='http://localhost:3001'
    pollInterval={5000} />,
  document.getElementById('root')
);