import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchPosts,
  retrievePost,
  createPost,
  updatePost,
  deletePost,
  createComment,
} from '../../service/API';

export const getAll = createAsyncThunk(
  'post/getAll',
  async (_request, { rejectWithValue }) => {
    try {
      const data = await fetchPosts();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const getById = createAsyncThunk(
  'post/getById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await await retrievePost(id);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const add = createAsyncThunk(
  'post/add',
  async (requestData, { rejectWithValue }) => {
    try {
      const data = await createPost(requestData);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const updateById = createAsyncThunk(
  'post/update',
  async (requestData, { rejectWithValue }) => {
    try {
      const data = await updatePost(requestData);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const deleteById = createAsyncThunk(
  'post/deleteById',
  async (id, { rejectWithValue }) => {
    try {
      await deletePost(id);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const addComment = createAsyncThunk(
  'post/addComment',
  async (requestData, { rejectWithValue }) => {
    try {
      const data = await createComment(requestData);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
