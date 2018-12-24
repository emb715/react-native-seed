import update from 'immutability-helper';

export const initialState = {
  isLogin: true,
  isNew: false,
  userData: 'Eze',
};

export const reducers = {
  setIsLogin: (state, isLogin) => {
    console.log('user reducer setIsLogin', isLogin);
    return update(state, { 
      isLogin: { $set: isLogin }
    });
  },
  setIsNew: (state, isNew) => {
    console.log('user reducer setIsNew', isNew);
    return update(state, { 
      isNew: { $set: isNew }
    });
  },
  setData: (state, data) => {
    console.log('user reducer setData', data);
    return update(state, { 
      userData: { $set: data }
    });
  },
};