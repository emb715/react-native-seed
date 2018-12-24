
export const setNewKeyForParams = (params) => ({
  ...params,
  key: 'asd-123-key',
});

export const getParamsFromNavigation = (navigationState) => {
  let params = {};
  // if (Object.keys(navigationState).find(item => item === 'params')) {
  //   params = item;
  // }
  return params;
};
