import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/styles.scss';
import Root from './containers/Root';


import { configureStore } from 'store/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('react-view'));
