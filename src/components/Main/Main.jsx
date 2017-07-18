import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {
    intro: state.intro
  };
};

const Main = ({ intro }) => (
  <div>
    {intro}
  </div>
);

Main.propTypes = {
  intro: PropTypes.string
};

export default connect(
  mapStateToProps
)(Main);
