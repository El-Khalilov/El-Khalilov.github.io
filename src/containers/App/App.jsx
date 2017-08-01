import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ProjectsTypes } from '../../data/projects';
import { personalInfoTypes } from '../../data/personalInfo';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import About from '../../components/About';
import Projects from '../../components/Projects';
import ProjectContainer from '../ProjectContainer';
import Main from '../../components/Main';
import AnimatedWrapper from '../../components/AnimatedWrapper';
import ScrollToTop from '../../components/ScrollToTop';

class App extends Component {
  render() {
    const { projects, personalInfo } = this.props;
    const AnimatedSwitch = AnimatedWrapper(Switch);

    return (
      <BrowserRouter>
        <ScrollToTop>
          <Route render={({ location }) => (
            <TransitionGroup>
              <AnimatedSwitch key={location.key} location={location}>
                <Route exact render={props => (<Main personalInfo={personalInfo} {...props}/>)} path='/' />
                <Route exact render={props => (<About personalInfo={personalInfo} {...props}/>)} path='/about' />
                <Route exact render={props => (<Projects projects={projects} {...props}/>)} path='/projects' />

                <Route component={ProjectContainer} path='/projects/:id' />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
          />
        </ScrollToTop>

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
