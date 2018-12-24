import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps, withHandlers, didSubscribe } from 'proppy';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, ActivityIndicator } from 'react-native';
// import { NavigationService } from '../services';
// _bootstrapAsync = async () => {
//   const userToken = await AsyncStorage.getItem('userToken');

//   // This will switch to the App screen or Auth screen and this loading
//   // screen will be unmounted and thrown away.
//   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
// };
const P = compose(
  withHandlers({
    verifyUserState: ({ userIsLogin, navigation }) => () => {
      console.log('verifyUserState > userIsLogin', userIsLogin);
      navigation.navigate(userIsLogin ? 'App' : 'Auth');
    },
  }),
  withProps(({ verifyUserState }) => {
    console.log('HandleLoadingScreen withProps');
    verifyUserState();
    return {
      stuff: 'stuff',
    };
  }),  
  didSubscribe((props) => {
    console.log('HandleLoadingScreen MOUNT', props);
  }),
);

const HandleLoadingScreen = (props) => {
  console.log('HandleLoadingScreen RENDER', props);
  return (
    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading</Text>
      <ActivityIndicator />
    </View>
  );
};

const mapStateToProps = state => ({
  userIsLogin: state.user.isLogin,
});

export default connect(mapStateToProps)(attach(P)(HandleLoadingScreen));