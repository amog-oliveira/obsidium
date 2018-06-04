import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Expo from 'expo';
import { firebase } from '../../config/firebase';
import { facebookConfig } from '../../config/services';
import { STYLES } from './style';


const id = facebookConfig.id;

export default class LoginFB extends Component{

    saveUserDataOnFireBase = (userFacebookInfo) => {
        const userId = firebase.auth().currentUser.uid;
        const params = {
            facebookId: userFacebookInfo.id,
            name: userFacebookInfo.name,
            email: userFacebookInfo.email,
            photoUrl: userFacebookInfo.picture.data.url
        };

        firebase.database().ref('profiles/' + userId).set(params)
        .then((data) => {
            console.log('Data was saved\n' + data);
        }).catch((error) => {
            console.log('Data could not be saved\n' + error);
        })
    }

    firebaseLogin = (credential, userFacebookInfo) => {
        firebase.auth().signInWithCredential(credential)
        .then(() => {
            this.saveUserDataOnFireBase(userFacebookInfo);
        }).catch((error) => {
            Alert.alert(error);
        })
    }

    facebookLogin = async () => { 
        const {type, token} =  await Expo.Facebook.logInWithReadPermissionsAsync(id, {permissions: [ 'public_profile', 'email'] });   
        if (type == 'success'){            
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
            );
            const userFacebookInfo = await response.json();
            const credential = await firebase.auth.FacebookAuthProvider.credential(token);
            this.firebaseLogin(credential, userFacebookInfo);
            this.navigateTo('FeedScreen');
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
                    Continuar com Facebook
                </Text>
            </TouchableOpacity>
        );
    }

    navigateTo(screenName){
        this.props.navigation.navigate(screenName);
    }

    render(){
        return(
            <View> 
                { this.getButton() }
            </View>
        );
    }
}