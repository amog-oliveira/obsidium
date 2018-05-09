import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Thumbnail,
  Button,
  Icon,
  Right
} from "native-base";
import { styles } from "./styles";
import { FEMALE_AVATAR } from "../../config/images";
import ActionButton from 'react-native-action-button';
import { Entypo } from '@expo/vector-icons';


const { data } = require('../../config/test.json');

export default class FeedScreen extends Component {
  render(){
    const { navigate } = this.props.navigation;
      return( 
      <Container>
      <Content>
        <Card style={styles.CardView}>
          <CardItem>
            <Left>
              <Thumbnail source={FEMALE_AVATAR} />
              <Body>
                <Text>{ data.name }</Text>
                <Text>{ data.apelido }</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <View style={styles.PostView}>
              <Text style={styles.text}>
                { data.mensagem }
              </Text>
            </View>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent
                onPress={ () => navigate('PostScreen') }
              >
                <Icon active name="ios-sad-outline" />
                <Text> { data.reacoes } reações</Text>
              </Button>
            </Left>
            <Right>
              <Text>{ data.enviado } horas atrás</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
      <ActionButton buttonColor="purple">
        <ActionButton.Item buttonColor='purple' onPress={ () => navigate('PostScreen') }>
          <Entypo name="new-message" size={20} color="white" />
        </ActionButton.Item>
      </ActionButton>
    </Container>
      )
  }
}