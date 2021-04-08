import * as actions from './posts-actions';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';

export const fetchPosts = () => dispatch => {
  dispatch(actions.fetchPostsRequest());

  axios
    .get('/posts')
    .then(({ data }) => dispatch(actions.fetchPostsSuccess(data)))
    .catch(error => {
      dispatch(actions.fetchPostsError(error));

      toast.error(error.message);
    });
};

export const retrievePost = id => dispatch => {
  dispatch(actions.retrievePostRequest());

  axios
    .get(`/posts/${id}?_embed=comments`)
    .then(({ data }) => dispatch(actions.retrievePostSuccess(data)))
    .catch(error => {
      dispatch(actions.retrievePostError(error));

      toast.error(error.message);
    });
};

export const createPost = (title, body) => dispatch => {
  const post = {
    title,
    body,
  };

  dispatch(actions.createPostRequest());

  axios
    .post('/posts', post)
    .then(({ data }) => dispatch(actions.createPostSuccess(data)))
    .catch(error => {
      dispatch(actions.createPostError(error));

      toast.error(error.message);
    });
};

export const updatePost = (id, title, body) => dispatch => {
  const post = {
    title,
    body,
  };

  dispatch(actions.updatePostRequest());

  axios
    .put(`/posts/${id}`, post)
    .then(({ data }) => dispatch(actions.updatePostSuccess(data)))
    .catch(error => {
      dispatch(actions.updatePostError(error));

      toast.error(error.message);
    });
};

export const deletePost = id => dispatch => {
  dispatch(actions.deletePostRequest());

  axios
    .delete(`/posts/${id}`)
    .then(() => dispatch(actions.deletePostSuccess(id)))
    .catch(error => {
      dispatch(actions.deletePostError(error));

      toast.error(error.message);
    });
};

export const createComment = (id, body) => dispatch => {
  const comment = {
    postId: Number(id),
    body,
  };

  dispatch(actions.createCommentRequest());

  axios
    .post('/comments', comment)
    .then(({ data }) => dispatch(actions.createCommentSuccess(data)))
    .catch(error => {
      dispatch(actions.createCommentError(error));

      toast.error(error.message);
    });
};
