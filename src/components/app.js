import React, { Component } from 'react';
import CommentList from '../containers/comment-list';
import CommentBody from '../containers/comment-body';


export default class App extends Component {
  render() {
    return (
      <div className='my-container'>
      	<div className='comment-list'>
      		<CommentList />
      	</div>
      	<div className='comment-body'>
      		<CommentBody />
      	</div>
      </div>
    );
  }
}
