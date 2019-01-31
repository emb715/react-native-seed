import React from 'react';
import { compose, withHandlers, withStateHandlers, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Image } from 'react-native';
import { Card, Subtitle, Caption, Button, Icon } from '@shoutem/ui';
import { connectStyle } from '@shoutem/theme';
import { NavigationService } from '../../services';

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
    console.log('AvatarItem MOUNT PROPS', props);
  }),
);

const AvatarItem = ({ style }) => {
  const styles = style;
  return (
    <Card>
      <Image
        styleName="medium-wide"
        source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-12.png'}}
      />
      <View styleName="content">
        <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
        <View styleName="horizontal v-center space-between">
          <Caption>21 hours ago</Caption>
          <Button styleName="tight clear"><Icon name="add-event" /></Button>
        </View>
      </View>
    </Card>
  );
};

const styles = {
  avatarImage: {
    width: 360,
    height: 360,
    borderRadius: 18,
    // backgroundColor: 'yellow',
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
  },
};

AvatarItem.propTypes = {};

AvatarItem.defaultProps = {};

// export default ;1
export default connectStyle('com.example.AvatarItem', styles)(attach(P)(AvatarItem));

