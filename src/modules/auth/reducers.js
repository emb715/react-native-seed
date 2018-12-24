import update from 'immutability-helper';
// import firebase from 'react-native-firebase';
// import { Auth as AuthService } from '../../services';

export const initialState = {
  isLogin: false,
  user: null,
};

export const reducers = {
  authState: (state, user) => {
    return update(state, {
      user: user,
      isLogin: user !== null ? true : false,
    });
  },
};