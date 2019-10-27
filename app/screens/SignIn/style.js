import { StyleSheet } from 'react-native';


const PRIMARY_COLOR = '#291b59';
export const STYLES = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: PRIMARY_COLOR,
  },
  welcomeMessage:{
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    padding: 30,
  },
  termsMessage: {
    color: 'white',
    fontSize: 12,
    padding: 30,
    textAlign: 'justify',
  },
  buttonStyle:{
    width: 300,
    alignSelf: 'center',
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#3B5998',
  },
  textButtonStyle: {
    color: 'white', 
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});