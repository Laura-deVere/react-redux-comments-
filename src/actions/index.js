export function selectComment(comment) {
	return {
		type: 'COMMENT_SELECTED',	
		payload: comment
	}
}