import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import LoginFB from './LoginFB';
import { firebase } from '../../config/firebase';
import { STYLES } from './style';
import { LOGO } from '../../config/images';

export default class SignInScreen extends Component{

  componentWillMount(){
    const { navigate } = this.props.navigation;
    firebase.auth().onAuthStateChanged((user) => {
      if(user != null){
        navigate('FeedScreen');
      }
    })
  }

  render(){
      return (
        <View style={ STYLES.container }>
          <Text style={ STYLES.welcomeMessage }>Bem vindo(a) ao{ '\n'}Aqui tem Assédio</Text>
          <LoginFB/>
          <Text style={ STYLES.termsMessage }>Ao clicar em continuar, aceito os termos de serviços e política de privacidade do Aqui Tem Assédio.</Text>
        </View>
      );
  }
}