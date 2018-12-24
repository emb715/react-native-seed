import React from 'react';
import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, Button } from 'react-native';
import { Examples } from '@shoutem/ui';
import { NavigationService } from '../services';

const P = compose(
  withHandlers({
    goTo: () => () => {
      NavigationService.toggleDrawer();
    },
  }),
  withProps(),
  didSubscribe((props) => {
    console.log('ExamplesScreen MOUNT PROPS', props);
  }),
);
const ExamplesScreen = ({ goTo, userData }) => {
  console.log('ExamplesScreen RENDER', userData);
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      {/* <Heading>{`TITLE ${userData}`}></Heading>
      <Title>{`TITLE ${userData}`}</Title> */}
      <Examples />
      <Button
        title="ExamplesScreen asd"
        onPress={goTo}
      >
        <Text>
        ExamplesScreen asd
        </Text>
      </Button>
    </View>
  );
};

ExamplesScreen.propTypes = {};

ExamplesScreen.defaultProps = {
  
};

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(attach(P)(ExamplesScreen));
