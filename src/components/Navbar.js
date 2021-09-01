import React from 'react';
import {View, Text} from 'react-native';

const Navbar = () => {
  return (
    <View
      style={{
        backgroundColor: 'skyblue',
        padding: 10,
        flexWrap: 'wrap',
      }}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Redux Essentials Example</Text>
    </View>
  );
};

export default Navbar;
