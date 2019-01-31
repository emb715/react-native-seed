import React from 'react';
import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { NavigationService } from '../services';
import ColorPalette from './examples/colorPalette';

const P = compose(
  withHandlers({
    goTo: () => () => {
      NavigationService.navigate({ routeName: 'Main' });
    },
  }),
  withProps(),
  didSubscribe((props) => {
    console.log('ExamplesScreen MOUNT PROPS', props);
  }),
);
const ExamplesScreen = ({ goTo, userData }) => {
  console.log('ExamplesScreen RENDER', userData);
  return (
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Examples', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Button
        title="Main Screen"
        onPress={goTo}
      >
        <Text>Main Screen</Text>
      </Button>
      <ColorPalette />
    </View>
  );
};

ExamplesScreen.propTypes = {};

ExamplesScreen.defaultProps = {
  
};

export default attach(P)(ExamplesScreen);
