import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import PropTypes from 'prop-types';
import DevTools from '../DevTools';

class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <DevTools />
          <App />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object
};

module.exports = Root;
