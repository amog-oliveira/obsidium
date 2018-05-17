import { StyleSheet, Dimensions } from 'react-native';
import { width } from '../../config/constants';



export const STYLES = StyleSheet.create({
  container:{
    flex:1,
  },
  buttonStyle:{
    width: 200,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#3B5998',
  },
  textButtonStyle: {
    color: 'white', 
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  text:{
    color: 'white',
    alignSelf: 'center',
    fontSize: 16
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})