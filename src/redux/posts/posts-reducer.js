import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './posts-actions';

const items = createReducer([], {
  [actions.fetchPostsSuccess]: (_, { payload }) => payload,
  [actions.createPostSuccess]: (state, { payload }) => [...state, payload],
  [actions.updatePostSuccess]: (state, { payload }) => [...state, payload],
  [actions.deletePostSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.createCommentRequest]: (state, { payload }) => [...state, payload],
});

const post = createReducer([], {
  [actions.retrievePostSuccess]: (state, { payload }) => [...state, payload],
});

const isLoading = createReducer(false, {
  [actions.fetchPostsRequest]: () => true,
  [actions.fetchPostsSuccess]: () => false,
  [actions.fetchPostsError]: () => false,

  [actions.retrievePostRequest]: () => true,
  [actions.retrievePostSuccess]: () => false,
  [actions.retrievePostError]: () => false,

  [actions.createPostRequest]: () => true,
  [actions.createPostSuccess]: () => false,
  [actions.createPostError]: () => false,

  [actions.updatePostRequest]: () => true,
  [actions.updatePostSuccess]: () => false,
  [actions.updatePostError]: () => false,

  [actions.deletePostRequest]: () => true,
  [actions.deletePostSuccess]: () => false,
  [actions.deletePostError]: () => false,

  [actions.createCommentRequest]: () => true,
  [actions.createCommentSuccess]: () => false,
  [actions.createCommentError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [actions.fetchPostsError]: setError,
  [actions.retrievePostError]: setError,
  [actions.createPostError]: setError,
  [actions.updatePostError]: setError,
  [actions.deletePostError]: setError,
  [actions.createCommentError]: setError,

  [actions.fetchPostsRequest]: () => null,
  [actions.retrievePostRequest]: () => null,
  [actions.createPostRequest]: () => null,
  [actions.updatePostRequest]: () => null,
  [actions.deletePostRequest]: () => null,
  [actions.createCommentRequest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
  post,
});
