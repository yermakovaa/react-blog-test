export const getPosts = state => state.posts.items;
export const getPost = state => state.posts.post[0];
export const getLoading = state => state.posts.isLoading;
export const getError = state => state.posts.error;
