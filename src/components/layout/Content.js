import React from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import variables from '../../theme/variables';

const Content = (props) => (
  <KeyboardAwareScrollView
    style={[styles.content, ...props.style]}
    contentContainerStyle={[ styles.contentContainer, ...props.contentContainerStyle]}
    {...props}
  >
    {props.children}
  </KeyboardAwareScrollView>
);
const styles = StyleSheet.create({
  content: {
    backgroundColor: variables.colors.neutral[500],
  },
  contentContainer: {
    padding: variables.gap.md,
  }
});

Content.defaultProps = {
};

export default Content;
