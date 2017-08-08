import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Project from '../../components/Project';
import NotFound from '../../components/NotFound';

const ProjectContainer = ({ project }) => {
  if (project !== undefined) {
    return <Project project={project} />;
  }

  return <NotFound/>;
};

const mapStateToProps = (state, ownProps) => ({
  project: state.projects.find(p => p.id === ownProps.match.params.id)
});

ProjectContainer.propTypes = {
  project: PropTypes.object
};

export default connect(
  mapStateToProps
)(ProjectContainer);
