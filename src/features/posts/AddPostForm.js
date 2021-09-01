import {nanoid} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {postAdded} from './postsSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onAddPostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle('');
      setContent('');
    }
  };
  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
        Add a New Post
      </Text>
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
      <TouchableOpacity style={style.buttonStyle} onPress={onAddPostClicked}>
        <Text style={{color: 'white'}}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
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
    height: 50,
    borderRadius: 5,
    backgroundColor: 'skyblue',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddPostForm;
