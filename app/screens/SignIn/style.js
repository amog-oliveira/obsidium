import { StyleSheet, Dimensions } from 'react-native';
import { width } from '../../config/constants';



export const STYLES = StyleSheet.create({
  button: {
    width: width * 0.8,
    //flex: 1,
    //alignSelf: 'center',
    backgroundColor: 'purple',
    height: 40,    
    marginTop: 20,
    justifyContent: 'center'
    
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
  view: {
    alignItems: 'center'
  }
})