import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = ({ items }) => {
  return (
    <nav className='nav'>
      {items.map((item, indx) => {
        if (item.type === 'route') {
          return <Link key={indx} to={item.url}>{item.title}</Link>;
        }
        return <a key={indx} target='_blank' href={item.url}>{item.title}</a>;
      }
      )}
    </nav>
  );
};

Nav.propTypes = {
  items: PropTypes.array.isRequired
};

export default Nav;
