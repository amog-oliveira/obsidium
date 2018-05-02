import React, { Component } from 'react';
import {
  TextInput, View, Text
} from 'react-native';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View>
        <TextInput
          editable={true}
          maxLength={40}
          value={this.state.text }
          onChangeText={ (text) => this.setState({text})}
        />
        <Text>{this.state.text.length}</Text>
      </View>
    );
  }
}