import React from 'react';
import { compose, withHandlers, didSubscribe } from 'proppy';
// import PropTypes from 'prop-types';
import { attach } from 'proppy-react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Avatar from '../avatar/Avatar';
import { NavigationService } from '../../services';
import variables from '../../theme/variables';

const P = compose(
  withHandlers({
    onPress: () => (route) => {
      NavigationService.navigate({ routeName: route });
    },
  }),
  didSubscribe((props) => {
    console.log('SidebarComponent MOUNT PROPS', props);
  }),
);

const styles = StyleSheet.create({
  contentContainer: {},
  container: {
    flex: 1,
    backgroundColor: variables.colors.primary[500],
  },
  items: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  item: {
    alignSelf: 'stretch',
    padding: variables.gap.md,
    backgroundColor: variables.colors.neutral[100],
    borderBottomWidth: 1,
    borderBottomColor: variables.colors.neutral[500],
  },
  item_ACTIVE: {
    backgroundColor: variables.colors.primary[300],
  },
  item__text: {
    fontSize: 18,
    color: variables.colors.primary[500],
  },
  item__text_ACTIVE: {
    color: '#fff',
  },
});

const itemsToRemove = [
  'Profile',
];
const itemsToAdd = [];

const SidebarComponent = ({
  onPress,
  activeItemKey,
  descriptors: items,
}) => {
  console.log('SidebarComponent RENDER');
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        {/* <Avatar /> */}
        <View style={styles.items}>
          {Object.values(items).map(({ key }) => (
            <TouchableOpacity
              key={key}
              title={key}
              onPress={() => onPress(key)}
              style={[styles.item, activeItemKey === key ? styles.item_ACTIVE : '']}
            >
              <Text style={[styles.item__text,  activeItemKey === key ? styles.item__text_ACTIVE : '']}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

SidebarComponent.propTypes = {};

SidebarComponent.defaultProps = {};

export default attach(P)(SidebarComponent);
