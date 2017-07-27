import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ children, title }) => {
  return (
    <section className='section'>
      {title && <h2 className='section-title'>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Section;
