import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from 'react-native-action-button';
import { Entypo } from '@expo/vector-icons';

export const FloatButtonAction = (props) => {
  return(
      <ActionButton buttonColor="purple">
        <ActionButton.Item buttonColor='purple' onPress={ () => props.navigate('PostScreen') }>
          <Entypo name="new-message" size={20} color="white" />
        </ActionButton.Item>
      </ActionButton>
  );
}