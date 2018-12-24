import React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { 
  _HandleLoadingScreen,
  _HandleUserInitScreen,
  ProfileScreen,
  WelcomeScreen,
  MainScreen,
} from '../screens';
import RegularUserRouter from './regularUserRouter';
import Sidebar from '../components/sidebar/Sidebar';

const RegularUserStack = createDrawerNavigator({
  RegularUser: {
    screen: RegularUserRouter,
  },
}, {
  headerMode: 'none',
  contentComponent: Sidebar,
});

const NewUserRouter = createSwitchNavigator({
  Profile: ProfileScreen,
});

const AppRouter = createSwitchNavigator({
  _HandleUserInit: _HandleUserInitScreen,
  NewUser: NewUserRouter,
  Main: RegularUserStack,
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