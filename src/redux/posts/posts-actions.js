import { createAction } from '@reduxjs/toolkit';
import * as types from './posts-types';

export const fetchPostsRequest = createAction(types.FETCH_POSTS_REQUEST);
export const fetchPostsSuccess = createAction(types.FETCH_POSTS_SUCCESS);
export const fetchPostsError = createAction(types.FETCH_POSTS_ERROR);

export const retrievePostRequest = createAction(types.RETRIEVE_POST_REQUEST);
export const retrievePostSuccess = createAction(types.RETRIEVE_POST_SUCCESS);
export const retrievePostError = createAction(types.RETRIEVE_POST_ERROR);

export const createPostRequest = createAction(types.CREATE_POST_REQUEST);
export const createPostSuccess = createAction(types.CREATE_POST_SUCCESS);
export const createPostError = createAction(types.CREATE_POST_ERROR);

export const updatePostRequest = createAction(types.UPDATE_POST_REQUEST);
export const updatePostSuccess = createAction(types.UPDATE_POST_SUCCESS);
export const updatePostError = createAction(types.UPDATE_POST_ERROR);

export const deletePostRequest = createAction(types.DELETE_POST_REQUEST);
export const deletePostSuccess = createAction(types.DELETE_POST_SUCCESS);
export const deletePostError = createAction(types.DELETE_POST_ERROR);

export const createCommentRequest = createAction(types.CREATE_COMMENT_REQUEST);
export const createCommentSuccess = createAction(types.CREATE_COMMENT_SUCCESS);
export const createCommentError = createAction(types.CREATE_COMMENT_ERROR);
