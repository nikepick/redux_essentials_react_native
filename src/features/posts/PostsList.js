import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAllPosts,
  setSinglePostModalVisibility,
  setPostId,
  setEditPostModalVisible,
} from './postsSlice';
import { fetchPosts } from './postsThunks';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(state => state.posts.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  const renderedPosts = posts.map(post => (
    <TouchableOpacity
      onPress={() => {
        showSinglePost(post.id);
      }}
      style={style.postContainer}>
      <View>
        <Text>{post.title}</Text>
      </View>
      <View style={style.hr}></View>
      <View>
        <Text>{post.body}</Text>
      </View>
      <Pressable
        onPress={() => {
          edit(post.id);
        }}
        style={style.buttonStyle}>
        <Text style={{color: 'white'}}>Edit</Text>
      </Pressable>
    </TouchableOpacity>
  ));

  const showSinglePost = id => {
    dispatch(setPostId(id));
    dispatch(setSinglePostModalVisibility());
  };

  const edit = id => {
    dispatch(setPostId(id));
    dispatch(setEditPostModalVisible());
  };
  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Posts:</Text>
      {renderedPosts}
    </View>
  );
};

const style = StyleSheet.create({
  postContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    borderColor: 'skyblue',
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#cecece',
    margin: 5,
  },
  buttonStyle: {
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 'auto',
  },
});
export default PostsList;
