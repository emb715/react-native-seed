import React from 'react';
import { compose, withHandlers, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, Button } from 'react-native';
import { NavigationService } from '../services';

const P = compose(
  withHandlers({
    goTo: () => () => {
      NavigationService.navigate({ routeName: 'Auth' });
    },
  }),
  didSubscribe((props) => {
    console.log('HelloScreen MOUNT PROPS', props);
  }),
);

const HelloScreen = ({ goTo, userData }) => {
  console.log('HelloScreen RENDER');
  return (
    <View style={{ marginTop: 200 }}>
      <Button
        title={`Hello ${userData}`}
        onPress={goTo}
      >
        <Text>
          {`Hello ${userData}`}
        </Text>
      </Button>
    </View>
  );
};

HelloScreen.propTypes = {};

HelloScreen.defaultProps = {};

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(attach(P)(HelloScreen));
