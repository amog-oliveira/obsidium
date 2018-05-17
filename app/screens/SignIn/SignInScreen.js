import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import LoginFB from './LoginFB';
import { firebase } from '../../config/firebase';
import { STYLES } from './style';
import { LOGO } from '../../config/images';

export default class SignInScreen extends Component{

  componentWillMount(){
    const { navigate } = this.props.navigation
    firebase.auth().onAuthStateChanged((user) => {
      if(user != null){
        navigate('FeedScreen');
      }
    })
  }

  render(){
      return (
        <Container>
          <Content>
            <Form>
              <View style={ STYLES.container}>
                <Text>Bem vindo(a) ao Aqui tem Assédio</Text>
                <LoginFB/>
              </View>
            </Form>
          </Content>

        </Container>
      );
  }
}