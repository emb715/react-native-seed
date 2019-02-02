import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import variables from '../../theme/variables';

const Content = ({ children, style, contentContainerStyle }) => (
  <ScrollView
    style={styles.content}
    contentContainerStyle={styles.contentContainer}
  >
    {children}
  </ScrollView>
);
const styles = StyleSheet.create({
  content: {},
  contentContainer: {
    padding: variables.gap.md,
  }
});

Content.defaultProps = {
  children: null,
  style: {},
  contentContainerStyle: {},
};

export default Content;
