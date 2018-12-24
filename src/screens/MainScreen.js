import React from 'react';
import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, Button } from 'react-native';
import { NavigationBar, Title, Heading } from '@shoutem/ui';
import { NavigationService } from '../services';

const P = compose(
  withHandlers({
    goTo: () => () => {
      NavigationService.toggleDrawer();
    },
  }),
  withProps(),
  didSubscribe((props) => {
    console.log('MainScreen MOUNT PROPS', props);
  }),
);
const MainScreen = ({ goTo, userData }) => {
  console.log('MainScreen RENDER', userData);
  return (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>
      <Heading>{`TITLE ${userData}`}></Heading>
      <Title>{`TITLE ${userData}`}</Title>
      <Button
        title="MainScreen asd"
        onPress={goTo}
      >
        <Text>
          MainScreen asd
        </Text>
      </Button>
    </View>
  );
};

MainScreen.propTypes = {};

MainScreen.defaultProps = {
  
};

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(attach(P)(MainScreen));
