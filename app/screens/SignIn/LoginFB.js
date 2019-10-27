import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import * as Facebook  from 'expo-facebook';
import {
    FACEBOOK_APP_ID
  } from 'react-native-dotenv';
import { firebase } from '../../config/firebase';
// import { facebookConfig } from '../../config/services';
import { STYLES } from './style';

const FACEBOOK_PERMISSIONS = { permissions: [ 'public_profile', 'email'] };

export default class LoginFB extends Component{
    constructor(props){
        super(props);
        this.navigate = this.props.navigate;
    }

    saveUserDataOnFireBase = (userFacebookInfo) => {
        const userId = firebase.auth().currentUser.uid;
        const params = {
            facebookId: userFacebookInfo.id,
            name: userFacebookInfo.name,
            email: userFacebookInfo.email,
            photoUrl: userFacebookInfo.picture.data.url
        };

        firebase.database().ref('users/' + userId).set(params)
        .then((data) => {
            console.log('Data was saved\n' + data);
            return this.navigate('FeedScreen');
        }).catch((error) => {
            console.log('Data could not be saved\n' + error);
        })
    }

    firebaseLogin = (credential, userFacebookInfo) => {
        firebase.auth().signInWithCredential(credential)
        .then(() => {
            this.saveUserDataOnFireBase(userFacebookInfo);
        }).catch((error) => {
            Alert.alert('credential:', credential);
        })
    }

    facebookLogin = async () => { 
        const { type, token } =  await Facebook.logInWithReadPermissionsAsync(
            FACEBOOK_APP_ID,
            FACEBOOK_PERMISSIONS
        );
   
        if (type == 'success'){            
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
            );
            const userFacebookInfo = await response.json();
            const credential = await firebase.auth.FacebookAuthProvider.credential(token);
            this.firebaseLogin(credential, userFacebookInfo);
        }else{
            Alert.alert("Login", "Login cancelado");
        } 
    }

    getButton(){
        return(
            <TouchableOpacity 
                style={STYLES.buttonStyle} 
                onPress={() => this.facebookLogin()}
            >
                <Text style={STYLES.textButtonStyle}>
                    Acessar com Facebook
                </Text>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <View> 
                { this.getButton() }
            </View>
        );
    }
}