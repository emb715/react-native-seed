import React from 'react';
// import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
// import { attach } from 'proppy-react';
import { View, StyleSheet } from 'react-native';
import Container from './Container';
import Header from './Header';
import Content from './Content';

const Screen = ({
  withHeader,
  headerProps,
  withContent,
  contentProps,
  children,
}) => (
  <Container containerProps>
    {withHeader && (
      <Header {...headerProps} />
    )}
    <View>
      {children}
    </View>
  </Container>
);

Screen.defaultProps = {
  containerProps: {},
  withHeader: true,
  withContent: true,
  headerProps: {},
  contentProps: {},
};

export default Screen;
