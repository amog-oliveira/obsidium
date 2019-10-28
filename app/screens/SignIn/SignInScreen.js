import React, { Component } from 'react';
import { 
  Text,
  KeyboardAvoidingView,
  View,
  StyleSheet } from 'react-native';
import LoginFB from './LoginFB';
import { firebase } from '../../config/firebase';
import { LOGO } from '../../config/images';
import Login from './Login';

export default function SignInScreen({navigation}) {
      return (
        <View style={styles.container}>
          <Login navigation={navigation} />
          <LoginFB />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});