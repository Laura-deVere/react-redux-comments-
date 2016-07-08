import { combineReducers } from 'redux';
import CommentsReducer from './reducer_comments';
import CommentSelected from './reducer_selected_comment';

const rootReducer = combineReducers({
  comments: CommentsReducer,
  commentSelected: CommentSelected
});

export default rootReducer;
