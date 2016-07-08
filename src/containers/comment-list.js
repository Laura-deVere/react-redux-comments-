import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class CommentList extends Component {
	renderList() {
		return this.props.comments.map((comment) =>{
			return (
				<li key={comment.id}>
					{comment.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		comments: state.comments
	};
}

export default connect(mapStateToProps)(CommentList);