import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const POST_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text:{
    fontSize: 16,
    flexDirection: 'row',
    flexWrap: 'wrap'
    
  },
  countText: {
    fontSize: 16
  }
});