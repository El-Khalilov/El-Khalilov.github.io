import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/styles.scss';

import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import * as Reducers from 'reducers';

import Project from 'components/Project';
import Resume from 'components/Resume';
import Main from 'components/Main';

import DevTools from 'components/DevTools';
import initialState from 'initialState';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
  ...Reducers,
  router: routerReducer
});

const store = createStore(rootReducer,
  initialState,
  compose(
    applyMiddleware(middleware),
    DevTools.instrument()
  )
);

const component = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className='content cf'>
        <DevTools/>
        <Route exact component={Main} path='/' />
        <Route component={Project} path='/project' />
        <Route component={Resume} path='/resume' />
      </div>
    </ConnectedRouter>

  </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));
