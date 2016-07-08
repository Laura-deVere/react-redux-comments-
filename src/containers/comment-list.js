import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectComment } from '../actions/index';

export default class CommentList extends Component {
	renderList() {
		return this.props.comments.map((comment) =>{
			return (
				<li key={comment.id}
					onClick={() => this.props.selectComment(comment)}>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectComment: selectComment }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);