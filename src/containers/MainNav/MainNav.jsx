import React from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav';
import { layoutTypes } from '../../reducers/propTypes';

const MainNav = (props) => {
  const { layout } = props;

  return (
    <Nav items={layout.nav}/>
  );
};

MainNav.propTypes = {
  layout: layoutTypes
};

function mapStateToProps(state) {
  return {
    layout: state.layout
  };
}


export default connect(
  mapStateToProps
)(MainNav);
