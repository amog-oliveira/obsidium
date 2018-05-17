import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import LoginFB from './LoginFB';
import { STYLES } from './style';
import { LOGO } from '../../config/images';

export default class SignInScreen extends Component{

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