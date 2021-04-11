import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com',
});

export const fetchPosts = async () => {
  const { data } = await Axios.get('/posts');
  return data;
};

export const retrievePost = async id => {
  const { data } = await Axios.get(`/posts/${id}?_embed=comments`);
  return data;
};

export const createPost = async requestData => {
  const { data } = await Axios.post('/posts', requestData);
  return data;
};

export const updatePost = async ({ id, title, body }) => {
  const post = {
    title,
    body,
  };
  const { data } = await Axios.put(`/posts/${id}`, post);
  return data;
};

export const deletePost = async id => {
  return await Axios.delete(`/posts/${id}`);
};

export const createComment = async ({ id, body }) => {
  const comment = {
    postId: Number(id),
    body,
  };
  const { data } = await Axios.post('/comments', comment);
  return data;
};
