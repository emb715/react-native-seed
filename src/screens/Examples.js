import React from 'react';
import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { attach } from 'proppy-react';
import { View, Text } from 'react-native';
import { NavigationService } from '../services';
import { Screen } from '../components';
import ColorPalette from './examples/colorPalette';

const P = compose(
  withHandlers({
    headerRightOnPress: () => () => {
      NavigationService.navigate({ routeName: 'Main' });
    },
  }),
  withProps(({ headerRightOnPress }) => ({
    headerProps: {
      title: 'Examples',
      rightProps: {
        icon: 'home',
        color: '#fff',
        onPress: headerRightOnPress,
      }
    }
  })),
  didSubscribe((props) => {
    console.log('ExamplesScreen MOUNT PROPS', props);
  }),
);
const ExamplesScreen = ({ headerProps }) => {
  console.log('ExamplesScreen RENDER');
  return (
    <Screen withContent headerProps={headerProps}>
      <View>
        <Text>Color Palette</Text>
        <ColorPalette />
      </View>
    </Screen>
  );
};

ExamplesScreen.propTypes = {};

ExamplesScreen.defaultProps = {};

export default attach(P)(ExamplesScreen);
