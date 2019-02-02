import React from 'react';
import { compose, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { attach } from 'proppy-react';
import { Avatar } from 'react-native-elements';

const P = compose(
  didSubscribe((props) => {
    console.log('AvatarItem MOUNT PROPS', props);
  }),
);

const AvatarComponent = () => (
  <Avatar
    rounded
    source={{
      uri:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    }}
  />
);

AvatarComponent.propTypes = {};

AvatarComponent.defaultProps = {};

export default attach(P)(AvatarComponent);
