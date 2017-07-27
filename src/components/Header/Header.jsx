import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

import MainNav from '../../containers/MainNav';

const Header = ({ title }) => (
  <header className='header'>
    <MainNav />
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.node
};


export default Header;
