import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import * as Facebook  from 'expo-facebook';
import {
    FACEBOOK_APP_ID
  } from 'react-native-dotenv';
// import { facebookConfig } from '../../config/services';
import { STYLES } from './style';
import { withNavigation } from 'react-navigation';
import { auth, firebase } from './../../config/firebase';

const FACEBOOK_PERMISSIONS = { permissions: [ 'public_profile', 'email'] };

function LoginFB({navigation}){

    saveUserDataOnFireBase = (userFacebookInfo) => {
        const userId = auth.currentUser.uid;
        const params = {
            facebookId: userFacebookInfo.id,
            name: userFacebookInfo.name,
            email: userFacebookInfo.email,
            photoUrl: userFacebookInfo.picture.data.url
        };

        firebase.database().ref('users/' + userId).set(params)
        .then((data) => {
            console.log('Data was saved\n' + data);
            return navigation.navigate('FeedScreen');
        }).catch((error) => {
            console.log('Data could not be saved\n' + error);
        })
    }

    firebaseLogin = (credential, userFacebookInfo) => {
        auth.signInWithCredential(credential)
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

export default withNavigation(LoginFB);