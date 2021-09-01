import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Navbar from './components/Navbar';
import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';

const Main = () => {
  return (
    <SafeAreaView>
      <Navbar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{padding: 10}}>
          <AddPostForm />
          <PostsList />
          <SinglePostPage />
          <EditPostForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
