import { createSlice } from '@reduxjs/toolkit';
import * as postOperations from './postOperations';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [postOperations.getAll.fulfilled](state, action) {
      state.data = action.payload;
    },
    [postOperations.add.fulfilled](state, action) {
      state.data = [...state.data, action.payload];
    },
    [postOperations.getById.fulfilled](state, action) {
      state.data = action.payload;
    },
    [postOperations.updateById.fulfilled](state, action) {
      state.data = { ...action.payload, comments: state.data.comments };
    },
    [postOperations.deleteById.fulfilled](state, action) {
      state.data = state.data.filter(({ id }) => id !== action.payload);
    },
    [postOperations.addComment.fulfilled](state, action) {
      state.data.comments.push(action.payload);
    },
  },
});

export default postSlice.reducer;
