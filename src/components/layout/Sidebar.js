import React from 'react';
import { compose, withHandlers, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationService } from '../../services';
import variables from '../../theme/variables';

const P = compose(
  withHandlers({
    goTo: ({ navigation }) => (route) => {
      console.log('goto');
      // navigation.navigate('Examples');
      NavigationService.navigate({ routeName: route });
    },
  }),
  didSubscribe((props) => {
    console.log('SidebarComponent MOUNT PROPS', props);
  }),
);

const SidebarComponent = ({ goTo }) => {
  console.log('SidebarComponent RENDER');
  return (
    <View style={styles.container}>
      <Button
        title="SidebarComponent"
        onPress={goTo}
      >
        <Text>
        SidebarComponent
        </Text>
      </Button>
      <Button
        title="Examples"
        onPress={() => goTo('Examples')}
      >
        <Text>
        Examples
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: 'black',
  }
});

SidebarComponent.propTypes = {};

SidebarComponent.defaultProps = {};

export default attach(P)(SidebarComponent);
