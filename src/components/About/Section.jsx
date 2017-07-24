import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <section className='section'>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Section;
