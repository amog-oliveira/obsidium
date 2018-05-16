import React, { Component } from 'react';
import {
  TextInput, View, Text
} from 'react-native';
import { STYLES } from './styles';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  alertCount(count){
    if(count === 460){
      alert('Você só pode usar 460 caracteres. "/"');
      return count;
    }else{
      return count;
    }
  }

  enviar(){
    alert('Cadastrado.');
  }

  render() {
    return (
      <View style={STYLES.container}>
        <TextInput
          multiline={true}
          editable={true}
          maxLength={460}
          value={this.state.text }
          onChangeText={ (text) => this.setState({text})}
          underlineColorAndroid="rgba(0,0,0,0)"
          autoFocus
          style={STYLES.text}
          onSubmitEditing = {
            () => this.enviar()
          }
        />
        <Text
          style={STYLES.countText}
        >
          { this.alertCount(this.state.text.length) }
        </Text>

      </View>
    );
  }
}