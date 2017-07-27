import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from '../../components/Nav';

const MainNav = (props) => {
  const { layout } = props;

  return (
    <Nav items={layout.nav}/>
  );
};

MainNav.propTypes = {
  layout: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    layout: state.layout
  };
}


export default connect(
  mapStateToProps
)(MainNav);
