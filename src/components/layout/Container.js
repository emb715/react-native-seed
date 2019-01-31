import React from 'react';
import { View, StyleSheet } from 'react-native';
import variables from '../../theme/variables';

const Container = ({ children, background }) => (
  <View style={[styles.container, { backgroundColor: background }]}>
    {children}
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: variables.containerHeight,
  },
});

Container.defaultProps = {
  background: variables.colors.neutral[100],
};

export default Container;
