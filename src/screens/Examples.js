import React from 'react';
import { compose, withHandlers, withProps } from 'proppy';
import { attach } from 'proppy-react';
import { View, StyleSheet } from 'react-native';
import { NavigationService } from '../services';
import { Screen, Heading } from '../components';
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
);

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch',
    height: 1,
    marginVertical: 20,
    backgroundColor: '#ccc',
  }
});

const ExamplesScreen = ({ headerProps }) => (
  <Screen withContent headerProps={headerProps}>
    {/* COLOR PALETTE */}
    <Heading h3>Color Palette</Heading>
    <ColorPalette />
    <View style={styles.divider}></View>
    {/* HEADING */}
    <Heading h1>Heading Text H1</Heading>
    <Heading h2>Heading Text H2</Heading>
    <Heading h3>Heading Text H3</Heading>
    <Heading h4>Heading Text H4</Heading>
    <Heading h5>Heading Text H5</Heading>
    <View style={styles.divider}></View>
  </Screen>
);

ExamplesScreen.defaultProps = {};

export default attach(P)(ExamplesScreen);
