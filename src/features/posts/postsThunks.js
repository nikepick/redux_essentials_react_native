import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response.data;
  });