import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import DevTools from '../containers/DevTools';

const logger = createLogger();


module.exports = function configureStore(initialState) {
  const store = createStore(rootReducer,
    initialState,
    compose(
      applyMiddleware(logger),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};
