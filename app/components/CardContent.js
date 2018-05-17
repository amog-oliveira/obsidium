import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardContentStyle } from '../assets/stylesheet/CardContentStyle';
import {
  CardItem,
} from "native-base";

export const CardContent = (props) => {
  
    return (         
           <CardItem cardBody>
            <View style={CardContentStyle.PostView}>
              <Text style={CardContentStyle.text}>
                { props.mensagem }
              </Text>
            </View>
          </CardItem>
    );
}