import { StyleSheet, Dimensions } from 'react-native';
import { width } from '../../config/constants';



export const STYLES = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: '#291b59',
  },
  welcomeMessage:{
    color: 'white',
    fontSize: 26,
    padding: 30,
  },
  termsMessage: {
    color: 'white',
    fontSize: 12,
    padding: 30,
    textAlign: 'justify',
  },
  buttonStyle:{
    width: 200,
    alignSelf: 'center',
    borderRadius: 100,
    padding: 10,
    backgroundColor: '#3B5998',
  },
  textButtonStyle: {
    color: 'white', 
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});