
import { StackNavigator } from 'react-navigation';
import SignInScreen from './../screens/SignIn/SignInScreen'

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
        fontWeight: 'bold',
        color: 'black'
      }
    }
  },
})