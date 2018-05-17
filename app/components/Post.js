import React, { Component } from 'react';
import { View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import { POST_STYLE } from '../assets/stylesheet/postStyle';
import { ButtonSubmit } from './ButtonSubmit';


export const Post = (props) => {
  
    return (
      <ScrollView>
        <View style={POST_STYLE.container}>
          <TextInput
            multiline={true}
            editable={true}
            maxLength={460}
            value={ props.valueText }
            onChangeText={ props.onChangeTextSubmit }
            underlineColorAndroid="rgba(0,0,0,0)"
            style={POST_STYLE.text}
            autoFocus
          />
          <Text style={POST_STYLE.countText}>
            { props.charactersLimit }
          </Text>
        </View>
        <ButtonSubmit buttonTextName={'Enviar'} onSubmitEditing={props.onSubmitEditing} />
      </ScrollView>
    );
}