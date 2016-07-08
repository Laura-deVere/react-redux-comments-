import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBody extends Component {
	render(){
		if(!this.props.comment) {
			return (
				<div>...</div>
			)
		}
		return (
			<div>
				<div>{this.props.comment.body}</div>
				<div>Author: {this.props.comment.userId}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		comment: state.commentSelected
	}
}

export default connect(mapStateToProps)(CommentBody);