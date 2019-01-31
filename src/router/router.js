import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { 
  _HandleLoadingScreen,
  _HandleUserInitScreen,
  ProfileScreen,
  WelcomeScreen,
  MainScreen,
} from '../screens';
import RegularUserNavigator from './regularUserNavigator';

const NewUserNavigation = createSwitchNavigator({
  Profile: ProfileScreen,
});

const AppRouter = createSwitchNavigator({
  _HandleUserInit: _HandleUserInitScreen,
  NewUser: NewUserNavigation,
  Main: RegularUserNavigator,
}, {
  initialRouteKey: '',
  initialRouteName: '_HandleUserInit',
  headerMode: 'none',
});

const AuthRouter = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen,
  }
}, {
  initialRouteKey: '',
  initialRouteName: 'Welcome',
  headerMode: 'none',
});

const Router = createAppContainer(
  createSwitchNavigator({
    _HandleLoading: _HandleLoadingScreen,
    Auth: AuthRouter,
    App: AppRouter,
  }, {
    initialRouteName: '_HandleLoading',
    headerMode: 'none',
  })
);

export default Router;