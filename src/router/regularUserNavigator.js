import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { 
  ExamplesScreen,
  MainScreen,
  WelcomeScreen,
  ProfileScreen,
  ProductsScreen,
} from '../screens';
import Sidebar from '../components/layout/Sidebar';

const defaultStackNavigatorProps = {
  headerMode: 'none',
  headerBackTitleVisible: false,
};

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  ProfileForm: {
    screen: ProfileScreen,
  },
}, {
  ...defaultStackNavigatorProps
});

const ProductsNavigator = createStackNavigator({
  Products: {
    screen: ProductsScreen,
  },
  ProductView: {
    screen: ProductsScreen,
  },
}, {
  ...defaultStackNavigatorProps
});

const Routes = {
  Examples: {
    screen: ExamplesScreen,
  },
  Main: {
    screen: MainScreen,
  },
  Profile: {
    screen: ProfileNavigator,
  },
  Products: {
    screen: ProductsNavigator,
  },
};

const RegularUserNavigator = createDrawerNavigator(Routes, {
  contentComponent: Sidebar,
  drawerType: 'back',
});

export default RegularUserNavigator;
