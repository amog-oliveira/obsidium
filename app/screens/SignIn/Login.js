import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from 'firebase';
import { withNavigation } from 'react-navigation';

const COLOR_WHITE = '#fff';
const COLOR_BLUE_LIGHT = '#006fe0';
const COLOR_GRAY_LIGHT = '#d3d3d3';
const COLOR_GRAY_DARK_LIGHT = '#737373';

function Login({ navigation }) {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  async function handleSubmit(){
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }
  
  
  async function handleSubmitSignUp(){
    navigation.navigate('SignUpScreen');
  }
  
  
  return(
    <>
      <TextInput 
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        placeholderTextColor={COLOR_GRAY_DARK_LIGHT}
        autoCapitalize='none'
      />
      <TextInput 
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        placeholderTextColor={COLOR_GRAY_DARK_LIGHT}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        >
       <Text style={styles.buttonText}>ACESSAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={handleSubmitSignUp}
       >
       <Text style={styles.buttonText}>CADASTRAR SEM REDE SOCIAL</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  inputBox: {
      fontSize: 16,
      borderColor: COLOR_GRAY_LIGHT,
      borderBottomWidth: 1,
      textAlign: 'center',
      margin: 10,
      padding: 5,
      color: COLOR_GRAY_DARK_LIGHT,
      textAlign: 'left',
  },
  button: {
      alignItems: 'center',
      backgroundColor: COLOR_BLUE_LIGHT,
      borderColor: COLOR_BLUE_LIGHT,
      padding: 10,
      paddingTop: 15,
      paddingBottom: 15,
      margin: 5,
      marginBottom: 20,
  },
  buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: COLOR_WHITE
  },
  buttonSignup: {
      fontSize: 12
  }
})


export default withNavigation(Login);