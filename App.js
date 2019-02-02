import React from 'react';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { attach } from 'proppy-react';
import { compose, withState, withHandlers, withProps } from 'proppy';
import selectorPlugin from '@rematch/select';
import { ProppyProvider } from 'proppy-react';
import { Font, AppLoading, Asset } from 'expo';
import models from './src/modules';
import { NavigationService, ErrorHandlerService } from './src/services';
import { router as Router } from './src/router';

const fontsToLoad = {
  'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
  'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
  'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
  'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
  'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
  'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
  'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
  'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
  'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
  'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
  'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
};

const imagesToLoad = [
  require('./assets/images/expo-icon.png'),
  require('./assets/images/expo-splash.png'),
];

const select = selectorPlugin({ sliceState: rootState => rootState });
const rematchInit = { models, plugins: [select] };
const store = init(rematchInit);

const { getState, dispatch } = store;
const providers = { getState, dispatch, store };

const P = compose(
  withState('loading', 'setLoading', true),
  withHandlers({
    loadImages: () => async() => {
      const cacheImages = imagesToLoad.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });
      return Promise.all(cacheImages)
    },
    loadAssets: () => async() => {
      await Font.loadAsync(fontsToLoad);
    },
    loadAssetsFail: () => () => {
      ErrorHandlerService.error('loadAssetsFail > error al cargar los archivos');
    }
  }),
  withProps(({ loadImages }) => {
    // Load images to cache async
    loadImages();
  }),
);

const App = ({ loading, loadAssets, setLoading, loadAssetsFail }) => {
  if (loading) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onFinish={() => setLoading(false)}
        onError={loadAssetsFail}
      />
    );
  }
  return (
    <Provider store={store}>
      <ProppyProvider providers={providers}>
        <Router
            ref={navigatorRef => NavigationService.initialize({ navigatorRef, providers })}
            onNavigationStateChange={
              (prevState, newState, action) => NavigationService.onNavigationChange(prevState, newState, action)
            }
            uriPrefix="/"
          />
      </ProppyProvider>
    </Provider>
  );
};


export default attach(P)(App);
