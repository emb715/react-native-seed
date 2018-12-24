import { createStackNavigator } from 'react-navigation';
import { 
  ExamplesScreen,
  MainScreen,
} from '../screens';

const RegularUserRouter = createStackNavigator({
  Examples: {
    screen: ExamplesScreen,
  },
  Main: {
    screen: MainScreen,
    // navigationOptions: {
    //   headerTitle: 'EZE TITLE',
    // }
  },
  Products: {
    screen: MainScreen,
  }
}, {
  initialRouteKey: '',
  initialRouteName: 'Main',
  headerMode: 'none',
});
export default RegularUserRouter;
