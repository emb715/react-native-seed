import React from 'react';
import { View, ScrollView } from 'react-native';
import Container from './Container';
import Header from './Header';
import Content from './Content';

const Screen = ({
  withHeader,
  headerProps,
  withScroll,
  containerProps,
  contentProps,
  children,
}) => (
  <Container {...containerProps}>
    {withHeader && (
      <Header {...headerProps} />
    )}
    {/* TODO: change for Content Component */}
    {withScroll
      ? (<ScrollView {...contentProps}>{children}</ScrollView>)
      : (<View {...contentProps}>{children}</View>)
    }
  </Container>
);

Screen.defaultProps = {
  containerProps: {},
  withHeader: true,
  withScroll: true,
  headerProps: {},
  contentProps: {},
};

export default Screen;
