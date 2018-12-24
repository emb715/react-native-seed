import React from 'react';
import { compose, withProps,  withHandlers, didSubscribe } from 'proppy';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attach } from 'proppy-react';
import SideMenu from 'react-native-side-menu';
import { View, Text } from 'react-native';
import RegularUserRouter from '../../router/regularUserRouter';
// import { NavigationService } from '../../services';
import SidebarComponent from '../sidebar/Sidebar';
import { getParamsFromNavigation } from '../../utils/helpers';

const P = compose(  
  withHandlers({
    onChangeDrawer: (props, { dispatch }) => (isOpen) => {
      dispatch.navigation.setDrawerOpen(isOpen);
    },
  }),
  withProps(({ navigation }) => {
    const navParams = getParamsFromNavigation(navigation);
    console.log('DrawerComponent PROPS', navParams);
  }),
  didSubscribe((props) => {
    console.log('DrawerComponent MOUNT PROPS', props);
  }),
);

const DrawerComponent = ({ drawerOpen, onChangeDrawer, children  }) => {
  console.log('DrawerComponent RENDER');
  return (
    <SideMenu
      isOpen={drawerOpen}
      menu={<SidebarComponent />}
      onChange={onChangeDrawer}
      >
      <View style={{ marginTop: 200, backgroundColor: 'red'}}>
        <Text>ASD</Text>
        {RegularUserRouter}
      </View>
    </SideMenu>
  );
};

DrawerComponent.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  onChangeDrawer: PropTypes.func.isRequired,
};

DrawerComponent.defaultProps = {};

const mapStateToProps = state => ({
  drawerOpen: state.navigation.drawerStatus,
});


export default connect(mapStateToProps)(attach(P)(DrawerComponent));
