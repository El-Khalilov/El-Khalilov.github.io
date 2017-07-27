import React from 'react';
import PropTypes from 'prop-types';
import './Subsection.scss';

const Section = ({ children, title }) => {
  return (
    <div className='subSection'>
      {title && <h4 className='subsection-title'>{title}</h4>}
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Section;
