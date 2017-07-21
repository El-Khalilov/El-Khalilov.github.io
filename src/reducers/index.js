import { combineReducers } from 'redux';
import projects from './projects';
import layout from './layout';
import personalInfo from './personalInfo';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  projects,
  layout,
  personalInfo,
  router: routerReducer
});

export default rootReducer;
