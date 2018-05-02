import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { STYLES } from './style';
import { LOGO_GIRL_POWER } from '../../config/images';

export default class SignInScreen extends Component{
  render(){
    return (
      <Container>

        <View
            style={ STYLES.view }
          >
          <Image
            source={LOGO_GIRL_POWER}
          />
        </View>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <View style={ STYLES.container}>
              <TouchableOpacity
                style={STYLES.button}
                onPress={() => { alert('Você acessou.') }}>
                <Text
                  style={STYLES.text}
                >Acessar</Text>
              </TouchableOpacity>

            </View>

          </Form>
        </Content>
      </Container>
    );
  }
}