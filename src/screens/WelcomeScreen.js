import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, didSubscribe } from 'proppy';
// import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, Button } from 'react-native';
import { NavigationService } from '../services';

const P = compose(
  withHandlers({
    goTo: ({ navigation }, { dispatch }) => () => {
      console.log('welcomeScreen button pressed');
      dispatch.user.setIsLogin(true);
      // navigation.navigate({ routeName: 'App' })
      // { routeName, params, action, key }
      NavigationService.navigate({ routeName: 'App' });
    },
  }),
  didSubscribe((props) => {
    console.log('WelcomeScreen PROPS', props);
    // console.log('WelcomeScreen NavigationService.getNavigator', NavigationService.getNavigator());
  }),
);

const WelcomeScreen = ({ goTo }) => {
  console.log('WelcomeScreen RENDER');
  return (
    <View style={{ marginTop: 200 }}>
      <Button
        title="welcomeScreen button"
        onPress={goTo}
      >
        <Text>
          Welcome Screen
        </Text>
      </Button>
    </View>
  );
};


WelcomeScreen.propTypes = {};

WelcomeScreen.defaultProps = {
};


export default attach(P)(WelcomeScreen);