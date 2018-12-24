import { dispatch } from '@rematch/core';
// import { AsyncStorage } from 'react-native';
// import { Auth as AuthService} from '../../services';
// import NavigationService from '../../services/Navigation';

// const userKey = 'userToken';

const effects = {
  async authCheckState() {
    // const user = await AuthService.authStateChange();
    // dispatch.auth.authState(user);
    // NavigationService.navigate(user ? 'App' : 'Auth');
  },
  async authLogout() {

  },
  async authSignup() {

  },
  // async checkLogin(navigation) {
  //   try {
  //     const authUser = dispatch.users.authUser();
  //     console.log('authUser', authUser, state.users.user);
  //     const value = await AsyncStorage.getItem(userKey);
  //     console.log('get datos', value);
  //     navigation.navigate(value ? 'App' : 'Auth');
  //     return value;
  //   } catch (error) {
  //     console.warn(error);
  //     return null;
  //   }
  // },
  // async signOut(navigation) {
  //   try {
  //     await AsyncStorage.removeItem(userKey);
  //     console.log('remove user');
  //     navigation.navigate('Auth');
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // },
  // async generateAuth(navigation) {
  //   try {
  //     await AsyncStorage.setItem(userKey, 'eze user');
  //     const save = await AsyncStorage.getItem(userKey);
  //     navigation.navigate('AuthLoading');
  //     return save;
  //   } catch (error) {
  //     console.warn(error);
  //     return null;
  //   }
  // },
};
export default effects;