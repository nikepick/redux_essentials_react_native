import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setSinglePostModalVisibility} from './postsSlice';

const SinglePostPage = () => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.posts.postId);
  const modalVisible = useSelector(state => state.posts.singlePostModalVisible);
  const post = useSelector(state =>
    state.posts.posts.find(post => post.id === id),
  );
  if (!post) {
    return (
      <Modal
        style={{marginTop: 100}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={style.container}>
          <View style={style.postConatiner}>
            <Text>Post not found!</Text>
          </View>
        </View>
      </Modal>
    );
  }
  return (
    <Modal
      style={{marginTop: 100}}
      animationType="slide"
      visible={modalVisible}>
      <View style={style.container}>
        <View style={style.postConatiner}>
          <Text>{post.title}</Text>
          <View style={style.hr}></View>
          <Text>{post.body}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'skyblue',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={() => {
            dispatch(setSinglePostModalVisibility());
          }}>
          <Text style={{color: 'white'}}>close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  postConatiner: {
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  container: {
    padding: 10,
    marginTop: 100,
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#cecece',
    margin:10
  },
  pageStyle: {
    backgroundColor: 'white',
    height: '100%',
    padding: 10,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default SinglePostPage;
