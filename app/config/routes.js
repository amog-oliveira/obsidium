
import { StackNavigator } from 'react-navigation';
import SignInScreen from './../screens/SignIn/SignInScreen';
import FeedScreen from '../screens/Feed/FeedScreen';
import PostScreen from "../screens/Post/PostScreen";

export const Navigation = StackNavigator({
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      header: null,
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
        color: 'purple'
      }
    }
  },
  PostScreen: {
    screen: PostScreen,
    navigationOptions: {
      title: 'Post',
      headerTitleStyle: 'center',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'purple'
      }
      
    }
  }
})