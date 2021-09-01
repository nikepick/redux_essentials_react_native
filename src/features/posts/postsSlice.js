import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';
import {client} from '../../api/client';
import { fetchPosts } from './postsThunks';

const initialState = {
  posts: [],
  singlePostModalVisible: false,
  editPostModalVisible: false,
  postId: '',
  status: 'idle',
  error: null,
};



const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts = [action.payload, ...state.posts];
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            body: content,
          },
        };
      },
    },
    postupdated(state, action) {
      const {id, title, content} = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = content;
      }
    },
    setSinglePostModalVisibility(state) {
      state.singlePostModalVisible = !state.singlePostModalVisible;
    },
    setEditPostModalVisible(state) {
      state.editPostModalVisible = !state.editPostModalVisible;
    },
    setPostId(state, action) {
      state.postId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        (state.status = 'failed'), (state.error = action.error.message);
      });
  },
});

export const {
  postAdded,
  setSinglePostModalVisibility,
  setEditPostModalVisible,
  setPostId,
  postupdated,
} = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = state => state.posts.posts;
