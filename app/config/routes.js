
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignUpScreen from './../screens/SignUp/SignUpScreen';
import SignInScreen from './../screens/SignIn/SignInScreen';
import FeedScreen from '../screens/Feed/FeedScreen';
import PostScreen from "../screens/Post/PostScreen";

const Routes = createAppContainer(
  createSwitchNavigator({
    SignInScreen,
    FeedScreen,
    SignUpScreen,
    PostScreen
  })
);

export default Routes;