import React from 'react';
import { View } from 'react-native';
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
    {withScroll
      ? (<Content {...contentProps}>{children}</Content>)
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
