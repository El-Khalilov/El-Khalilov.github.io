import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = ({ items }) => {
  return (
    <nav className='nav'>
      {items.map((item, indx) => {
        if (item.type === 'route') {
          return (
            <NavLink
              exact
              key={indx}
              to={item.url}
              activeClassName='active'
            >{item.title}</NavLink>);
        }
        return (
          <a key={indx}
            target='_blank' rel='noopener' href={item.url}
          >{item.title}</a>);
      }
      )}
    </nav>
  );
};

Nav.propTypes = {
  items: PropTypes.array.isRequired
};

export default Nav;
