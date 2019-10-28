import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  CardItem,
  Left,
  Button,

} from "native-base";

export const CardFooter = (props) => {
  
    return (   
          <CardItem>
            <Left>
                <Text> { props.enviado } horas atrás</Text>
            </Left>
          </CardItem>
    );
}