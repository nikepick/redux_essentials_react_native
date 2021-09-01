import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {postupdated, setEditPostModalVisible} from './postsSlice';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector(state => state.posts.editPostModalVisible);
  const id = useSelector(state => state.posts.postId);
  const post = useSelector(state =>
    state.posts.posts.find(post => post.id === id),
  );
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (modalVisible && post) {
      setTitle(post.title);
      setContent(post.body);
    }
  }, [modalVisible]);

  const update = () => {
    dispatch(postupdated({id, title, content}));
    dispatch(setEditPostModalVisible());
  };

  return (
    <Modal
      style={{marginTop: 100}}
      animationType="slide"
      visible={modalVisible}>
      <View style={style.container}>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          style={style.textInputConatiner}
          placeholder="Add Title"
        />
        <TextInput
          value={content}
          onChangeText={text => setContent(text)}
          style={style.textAreaInputConatiner}
          multiline={true}
          numberOfLines={4}
          placeholder="Add Content"
        />

        <TouchableOpacity
          style={style.buttonStyle}
          onPress={update}>
          <Text style={{color: 'white'}}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...style.buttonStyle, backgroundColor: '#DBA8AC'}}
          onPress={() => {
            dispatch(setEditPostModalVisible());
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
    margin: 10,
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
  textInputConatiner: {
    height: 50,
    padding: 10,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  textAreaInputConatiner: {
    height: 100,
    padding: 10,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: 'skyblue',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});
export default EditPostForm;
