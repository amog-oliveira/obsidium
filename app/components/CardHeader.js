import React, { Component } from 'react';
import { View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import {
  CardItem,
  Left,
  Body,
  Thumbnail
} from "native-base";

export const CardHeader = (props) => {
  
    return (
          <CardItem>
            <Left>
              <Thumbnail source={props.imageURI} />
              <Body>
                <Text>{ props.name }</Text>
                <Text>{ props.apelido }</Text>
              </Body>
            </Left>
          </CardItem>
    );
}