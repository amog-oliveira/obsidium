import React, { Component } from 'react';
import { firebase } from '../../config/firebase';
import {
    View,
    Text,
    TouchableOpacity,

} from 'react-native';
import Expo from 'expo';
import { STYLES } from './style';


const id = '1179605262181506';

export default class LoginFB extends Component{

    login = async () => { 
            const {type, token} =  await Expo.Facebook.logInWithReadPermissionsAsync(id, {permissions: [ 'public_profile', 'email'] })
            
            if (type == 'success'){
                
                const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`);

                const json = await response.json();

            console.log('USER INFO', json);    
            
        }else{
            alert(type);
        } 
    }

    getButton(){
    return(
        <TouchableOpacity onPress={() => this.login()}>
            <View style={STYLES.buttonStyle}>
                <Text style={STYLES.textButtonStyle}>
                    Facebook
                </Text>
            </View>
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