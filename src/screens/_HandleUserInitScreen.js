import React from 'react';
// import PropTypes from 'prop-types';
import { compose, withProps, withHandlers, didSubscribe } from 'proppy';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, ActivityIndicator } from 'react-native';

const P = compose(
  withHandlers({
    isNew: ({ userIsNew, navigation }) => () => {
      console.log('isNew > userIsNew', userIsNew, navigation);
      const navigate = userIsNew
        ? 'NewUser'
        : 'Main';
      navigation.navigate(navigate);
    },
  }),
  withProps(({ isNew }) => {
    console.log('HandlerUserInitScreen withProps');
    isNew();
  }),  
  didSubscribe((props) => {
    console.log('HandlerUserInitScreen MOUNT', props);
  }),
);

const HandleUserInitScreen = (props) => {
  console.log('HandlerUserInitScreen RENDER', props);
  return (
    <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading</Text>
      <ActivityIndicator />
    </View>
  );
};

const mapStateToProps = state => ({
  userIsNew: state.user.isNew,
});

export default connect(mapStateToProps)(attach(P)(HandleUserInitScreen));