import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { STYLES } from '../assets/stylesheet/buttonStyle';

export const ButtonSubmit = (props) => {
  return(
        <TouchableOpacity style={STYLES.buttonTouch} onPress={ props.onSubmitEditing  }>
          <Text style={STYLES.textButton}>{props.buttonTextName}</Text>
        </TouchableOpacity>
  );
}