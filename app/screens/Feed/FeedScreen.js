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
import {FloatButtonAction} from '../../components/FloatButtonAction';
import { CardHeader } from "../../components/CardHeader";
import { CardContent } from "../../components/CardContent";
import { CardFooter } from "../../components/CardFooter";
import { firebase } from '../../config/firebase';
const { data } = require('../../config/test.json');

export default class FeedScreen extends Component {

  cardView(message){
    if( message !== null ){
      return( 
          <Card style={styles.CardView}>
            <CardHeader imageURI={FEMALE_AVATAR} name={data.name} nickname={data.nickname} />
            <CardContent mensagem={message} />
            <CardFooter enviado={data.enviado} />
          </Card>
      );
    }else{
      return(
        <Text>Não há mensagens cadastradas</Text>
      );
    }
  }

  render(){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const message = params ? params.message : null;

    return( 
      <Container>

        <Content>
          { this.cardView(message) }
        </Content>

        <FloatButtonAction navigate={navigate} />
      </Container>
    )
  }
}