import { NavigationActions, DrawerActions } from 'react-navigation';
import AnalyticsService from './analtytics';
import { setNewKeyForParams } from '../utils/helpers';

let _navigator;
let _globalProviders;
let _drawer;

let initialized;
const initializedPromise = new Promise((res) => {
  initialized = res;
});

let initializedDrawer;
const initializedDrawerPromise = new Promise((res) => {
  initializedDrawer = res;
});

class NavigationService {

  static getNavigator() {
    return _navigator;
  }
  
  static initialize({ navigatorRef, providers }) {
    // console.log('NavigatorService initialize', navigatorRef);
    _navigator = navigatorRef;
    _globalProviders = providers;
    initialized();
  }

  static async navigate({ routeName, params, action }) {
    if (!_navigator) {
      await initializedPromise;
    }
    console.log('Navigation Service NAVIGATE', routeName);
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
        action,
      })
    );
  }

  
  static getActiveRoute(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return NavigationService.getActiveRoute(route);
    }
    return route;
  }

  static onNavigationChange(prevState, newState, action) {
    // console.log('Navigation Service CHANGE', prevState, newState, action, _globalProviders);
    _globalProviders.dispatch.navigation.setNewState({ newState, prevState });

    const currentScreen = NavigationService.getActiveRoute(newState);
    const prevScreen = NavigationService.getActiveRoute(prevState);

    if (prevScreen !== currentScreen) {
      // the line below uses the Google Analytics tracker
      // change the tracker here to use other Mobile analytics SDK.
      console.log('Navigation Service CHANGE > TRACK SCREEN VIEW', currentScreen);
      // TODO: TRACK SCREEN ANALYTICS 
      AnalyticsService.track({ screen: currentScreen.routeName, });
    }
  }

  static setDrawer(drawerRef) {
    if (!_drawer) {
      _drawer = drawerRef;
      initializedDrawer();
    }
  }

  static async toggleDrawer() {
    _navigator.dispatch(
      DrawerActions.toggleDrawer()
    );
  }

};

export default NavigationService;
