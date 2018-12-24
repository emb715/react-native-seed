import update from 'immutability-helper';

export const initialState = {
  drawerOpen: false,
  prevState: {},
  currentState: {}
};

export const reducers = {
  setNewState: (state, { newState, prevState }) => {
    console.log('navigation reducer NEWSTATE', newState, prevState);
    return update(state, { 
      prevState: { $set: prevState },
      currentState: { $set: newState }
    });
  },
  setDrawerOpen: (state, status) => {
    console.log('navigation reducer drawerOpen', status);
    return update(state, { 
      drawerOpen: { $set: status }
    });
  },
};