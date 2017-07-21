import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import PropTypes from 'prop-types';

class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object
};

module.exports = Root;
