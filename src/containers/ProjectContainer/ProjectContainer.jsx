import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Project from '../../components/Project';

const ProjectContainer = ({ project }) => {
  return (
    <Project project={project} />
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: state.projects.find(p => p.id === ownProps.match.params.id)
});

ProjectContainer.propTypes = {
  project: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps
)(ProjectContainer);
