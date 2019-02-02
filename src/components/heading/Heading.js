import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import variables from '../../theme/variables';

const styles = StyleSheet.create({
  container: {
    marginBottom: variables.gap.md,
  },
  h1: {
    fontSize: variables.font.largest,
  },
  h2: {
    fontSize: variables.font.large,
  },
  h3: {
    fontSize: variables.font.medium,
  },
  h4: {
    fontSize: variables.font.regular,
  },
  h5: {
    fontSize: variables.font.small,
  },

});

const Heading = ({
  children,
  containerStyle,
  style,
  h1,
  h2,
  h3,
  h4,
  h5,
}) => (
  <View style={[styles.container, containerStyle]}>
    <Text style={[
      style,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      h5 && styles.h5,
    ]}>{children}</Text>
  </View>
);

Heading.propTypes = {
  children: PropTypes.any,
  containerStyle: PropTypes.any,
  style: PropTypes.any,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
};

Heading.defaultProps = {
  children: null,
  containerStyle: {},
  style: {},
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
};

export default Heading;
