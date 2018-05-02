
import { StackNavigator } from 'react-navigation';
import SignInScreen from './../screens/SignIn/SignInScreen';
import FeedScreen from '../screens/Feed/FeedScreen';

export const Navigation = StackNavigator({
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      title: 'LOGIN',
      headerTitleStyle: 'center',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        color: 'purple'
      }
    }
  },
  FeedScreen: {
    screen: FeedScreen,
    navigationOptions: {
      title: 'Denúncias',
      headerLeft: null,
      headerTitleStyle: 'center',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black'
      }
    }
  },
})