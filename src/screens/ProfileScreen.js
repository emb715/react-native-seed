import React from 'react';
import { compose, withHandlers, withStateHandlers, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationService } from '../services';

const P = compose(
  withStateHandlers({
    userData: '',
  },{
    handleChangeText: ({ userData }) => value => {
      return {
        userData: value,
      };
    },
  }),
  withHandlers({
    goTo: ({ userData }, { dispatch }) => () => {
      dispatch.user.setData(userData);
      NavigationService.navigate({ routeName: 'Main', params: { isNewUser: true } });
    },
  }),
  didSubscribe((props) => {
    console.log('ProfileScreen MOUNT PROPS', props);
  }),
);

const ProfileScreen = ({ goTo, handleChangeText, userData }) => {
  console.log('ProfileScreen RENDER');
  return (
    <View style={{ marginTop: 200 }}>
      <TextInput
        value={userData}
        onChangeText={handleChangeText}
        style={{ borderColor: 'red', borderWidth: 2, height: 40, width: 200 }}
      />
      <Button
        title="Save Profile Button"
        onPress={goTo}
      >
        <Text>
          Save Profile
        </Text>
      </Button>
    </View>
  );
};

ProfileScreen.propTypes = {};

ProfileScreen.defaultProps = {};

export default attach(P)(ProfileScreen);
