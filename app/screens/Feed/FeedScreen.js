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


export default class FeedScreen extends Component {
    render(){
        return( 
        <Container>
        <Content>
          <Card style={styles.CardView}>
            <CardItem>
              <Left>
                <Thumbnail source={FEMALE_AVATAR} />
                <Body>
                  <Text>Amanda Oliveira</Text>
                  <Text>AMOG</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <View style={styles.PostView}>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent vestibulum molestie lacus. Aenean nonummy
                  hendrerit mauris. Phasellus porta. Fusce suscipit varius
                  mi. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat
                  malesuada odio. Morbi nunc odio, gravida at, cursus nec,
                  luctus a, lore (460)
                </Text>
              </View>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent
                  onPress={ () => this.props.navigation.navigate('PostScreen') }
                 >
                  <Icon active name="thumbs-down" />
                  <Text>10 curtidas</Text>
                </Button>
              </Left>
              <Right>
                <Text>12 horas atrás</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
        )
    }
}