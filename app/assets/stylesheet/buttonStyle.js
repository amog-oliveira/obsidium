import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const STYLES = StyleSheet.create({
  buttonTouch:{
    width: width * 0.8,
    backgroundColor: 'purple',
    height: 40,    
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textButton:{
    color: 'white',
    alignSelf: 'center',
    fontSize: 16
  }
});