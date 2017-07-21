import { createStore } from 'redux';
import rootReducer from '../reducers';


module.exports = function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  return store;
};
