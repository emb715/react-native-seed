import { initialState as state, reducers } from './reducers';
import effects from './effects';

const model = {
  state,
  reducers,
  effects,
};

export default model;