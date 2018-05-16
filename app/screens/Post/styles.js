import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  text:{
    fontSize: 20,
    width: width
    
  },
  countText: {
    fontSize: 22
  }
});