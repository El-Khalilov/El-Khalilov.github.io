import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';

import About from '../../components/About';
import Project from '../../components/Project';
import Main from '../../components/Main';


class App extends Component {
  render() {
    const { projects, layout, personalInfo } = this.props;

    return (
      <BrowserRouter>
        <div>
          <Route exact render={props => (<Main  layout={layout} personalInfo={personalInfo} {...props}/>)} path='/' />
          <Route render={props => (<About  layout={layout} personalInfo={personalInfo} {...props}/>)} path='/about' />
          <Route render={props => (<Project  layout={layout} projects={projects} {...props}/>)} path='/project' />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  projects: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
  personalInfo: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    projects: state.projects,
    layout: state.layout,
    personalInfo: state.personalInfo
  };
}


export default connect(
  mapStateToProps
)(App);
