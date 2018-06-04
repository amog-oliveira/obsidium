import React, { Component } from 'react';
import {
  TextInput, View, Text, Alert
} from 'react-native';
import { Post } from '../components/Post';


export default class PostContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  charactersLimit(count) {
    if (count === 460) {
      alert('Você só pode usar 460 caracteres. "/"');
      return count;
    } else {
      return count;
    }
  } 

  enviar() {
    this.props.navigation('FeedScreen', { message: this.state.text } );
  }


  onChangeTextSubmit(text){
    this.setState({text})
  }

  render() {

    return(
      <Post 
        onChangeTextSubmit={ (text) => this.onChangeTextSubmit(text) }
        valueText={this.state.text}
        charactersLimit={this. charactersLimit(this.state.text.length) }
        onSubmitEditing={ () => this.enviar() }
      />
    );
  }
}