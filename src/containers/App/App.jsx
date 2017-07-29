import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ProjectsTypes } from '../../data/projects';
import { personalInfoTypes } from '../../data/personalInfo';

import About from '../../components/About';
import Projects from '../../components/Projects';
import ProjectContainer from '../ProjectContainer';
import Main from '../../components/Main';


class App extends Component {
  render() {
    const { projects, personalInfo } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact render={props => (<Main personalInfo={personalInfo} {...props}/>)} path='/' />
          <Route exact render={props => (<About personalInfo={personalInfo} {...props}/>)} path='/about' />
          <Route exact render={props => (<Projects projects={projects} {...props}/>)} path='/projects' />

          <Route component={ProjectContainer} path='/projects/:id' />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  projects: ProjectsTypes,
  personalInfo: personalInfoTypes
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    projects: state.projects,
    personalInfo: state.personalInfo
  };
}


export default connect(
  mapStateToProps
)(App);
