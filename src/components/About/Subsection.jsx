import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div className='subSection'>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Section;
