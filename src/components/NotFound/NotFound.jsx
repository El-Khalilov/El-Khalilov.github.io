import React from 'react';
import { Icon } from 'react-fa';
import './NotFound.scss';
import MainNav from '../../containers/MainNav';

const NotFound = () => {
  return (
    <div className='page-404'>
      <h1>404 <Icon name='frown-o' /></h1>
      <h2>Page Not Found</h2>

      <MainNav />
    </div>
  );
};

export default NotFound;
