import React from 'react';
import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
import PropTypes from 'prop-types';
import { attach } from 'proppy-react';
import { Header } from 'react-native-elements';
import { NavigationService } from '../../services';
import variables from '../../theme/variables';

const P = compose(
  withHandlers({
    goTo: () => (screen) => {
      NavigationService.navigate({ routeName: screen });
    },
    leftComponentOnPress: () => () => {
      NavigationService.toggleDrawer();
    },
    rightComponentOnPress: () => () => {
    },
  }),
  withProps(({ leftComponentOnPress, rightComponentOnPress }) => {
    return {
      title: 'Header Title',
      textColor: '#fff',
      containerStyle: {
        backgroundColor: variables.colors.primary[500],
      },
      defaultIconProps: {
        underlayColor: variables.colors.primary[700],
        iconStyle: {}
      },
      leftProps: {
        icon: 'menu',
        color: '#fff',
        size: 26,
        onPress: leftComponentOnPress,
      },
      leftComponent: null,
      rightProps: {},
      rightComponent: null,
      statusBarStyle: { barStyle: 'light-content' },
    };
  }),
  didSubscribe((props) => {
    console.log('HeaderComponent MOUNT PROPS', props);
  }),
);

const HeaderComponent = ({
  title,
  textColor,
  leftProps,
  leftComponent,
  rightProps,
  rightComponent,
  statusBarStyle,
  containerStyle,
  defaultIconProps,
}) => {
  const leftOptions = { ...defaultIconProps, ...leftProps };
  let rightOptions;

  if (Object.keys(rightProps).length > 0) {
    rightOptions = { ...defaultIconProps, ...rightProps };
  } else {
    // dummy space
  }

  const renderLeftComponent = leftComponent
    ? leftComponent
    : leftOptions;
  const renderRightComponent = rightComponent
    ? rightComponent
    : rightOptions;

  return (
    <Header
      statusBarProps={statusBarStyle}
      leftComponent={renderLeftComponent}
      outerContainerStyles={containerStyle}
      centerComponent={{
        text: title,
        style: { 
          color: textColor,
        }
      }}
      rightComponent={renderRightComponent}
    />
  );
};

HeaderComponent.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
};

export default attach(P)(HeaderComponent);
