import React, { Component } from 'react';
import {
  TextInput, View, Text
} from 'react-native';
import PostContainer from '../../containers/PostContainer';

export default class PostScreen extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <PostContainer navigation={this.props.navigation.navigate}/>
    );
  }
}