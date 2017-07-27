import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

import MainNav from '../../containers/MainNav';

const Header = ({ title }) => (
  <div className='container'>
    <div className='row between-md between-lg'>
      <div className='col-sm-6'>
        <h1>{title}</h1>
      </div>

      <div className='col-sm-6'>
        <MainNav />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.node
};


export default Header;
