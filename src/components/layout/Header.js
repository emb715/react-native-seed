import React from 'react';
import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
import PropTypes from 'prop-types';
import { attach } from 'proppy-react';
import { Header } from 'react-native-elements';
import { NavigationService } from '../../services';

const P = compose(
  withHandlers({
    goTo: () => (screen) => {
      NavigationService.navigate({ routeName: screen });
    },
    leftComponentOnPress: () => () => {
      console.log('Menu click');
      NavigationService.toggleDrawer();
    },
    rightComponentOnPress: () => () => {
      console.log('Header Right click');
      // NavigationService.toggleDrawer();
    },
  }),
  withProps(({ leftComponentOnPress, rightComponentOnPress }) => {
    return {
      title: 'title',
      textColor: '#fff',
      style: {},
      leftOptions: {
        icon: 'menu',
        color: '#fff',
        size: 26,
        onPress: leftComponentOnPress,
      },
      leftComponent: null,
      rightOptions: {},
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
  style,
  leftOptions,
  leftComponent,
  rightOptions,
  rightComponent,
  statusBarStyle
}) => {
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
      centerComponent={{
        text: title,
        style: { 
          color: textColor, 
          ...style 
        }
      }}
      rightComponent={renderRightComponent}
    />
  );
};

HeaderComponent.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
};

// HeaderComponent.defaultProps = {
  
// };

export default attach(P)(HeaderComponent);
