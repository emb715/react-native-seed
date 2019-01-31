import React from 'react';
import { compose, withHandlers, withProps, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements';
import { NavigationService } from '../services';
// import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import Content from '../components/layout/Content';
// import { Header, Container } from '../components';

const P = compose(
  withHandlers({
    goTo: () => (screen) => {
      NavigationService.navigate({ routeName: screen });
    },
  }),
  withProps({
    title: 'Products',
  }),
  didSubscribe((props) => {
    console.log('ProductsScreen MOUNT PROPS', props);
  }),
);
const ProductsScreen = ({ goTo, userData }) => {
  console.log('ProductsScreen RENDER', userData);
  return (
    <Container>
      <Card title="CARD WITH DIVIDER">
        <View>
            <Image
              resizeMode="cover"
              source={require('../../assets/images/expo-icon.png')}
            />
            <Text>Profile Name</Text>
          </View>
      </Card>
      <Button
        title="View Examples"
        onPress={() => goTo('Examples')}
      >
        <Text>
          View Examples
        </Text>
      </Button>
      <Button
        title="Welcome Screen"
        onPress={() => goTo('Welcome')}
        styleName="secondary"
      >
        <Text>
          Welcome Screen
        </Text>
      </Button>
    </Container>
  );
};

ProductsScreen.propTypes = {};

ProductsScreen.defaultProps = {
  
};

const mapStateToProps = state => ({
  userData: state.user.userData,
});

const ProductsScreenWithProppy = attach(P)(ProductsScreen);

ProductsScreenWithProppy.navigationOptions = ({ title }) => ({
  title: title ? title : `Products Screen`,
});

export default connect(mapStateToProps)(ProductsScreenWithProppy);
