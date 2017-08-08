import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { personalInfoTypes, ProjectsTypes } from '../../reducers/propTypes';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import About from '../../components/About';
import Projects from '../../components/Projects';
import ProjectContainer from '../ProjectContainer';
import Main from '../../components/Main';
import NotFound from '../../components/NotFound';
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
                <Route component={NotFound} path='/projects/*' />
                <Route component={NotFound} path='*' />
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

function mapStateToProps(state) {
  return {
    projects: state.projects,
    personalInfo: state.personalInfo
  };
}


export default connect(
  mapStateToProps
)(App);
