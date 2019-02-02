import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, didSubscribe } from 'proppy';
// import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Screen } from '../../components';
import { NavigationService } from '../../services';

const P = compose(
  withHandlers(),
  didSubscribe((props) => {
    console.log('WelcomeScreen PROPS', props);
  }),
);

const styles = StyleSheet.create({
  content: {},
});

const WelcomeScreen = () => {
  console.log('WelcomeScreen RENDER');
  return (
    <Screen withHeader={false} withScroll>
      <Text>Welcome Screen</Text>
    </Screen>
  );
};


WelcomeScreen.propTypes = {};

WelcomeScreen.defaultProps = {};

export default attach(P)(WelcomeScreen);
