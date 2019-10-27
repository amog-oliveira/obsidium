import React from 'react';
import {
  View,
  StyleSheet } from 'react-native';
import SignUp from './SignUp';

export default function SignUpScreen({navigation}) {
      return (
        <View style={styles.container}>
          <SignUp navigation={navigation} />
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