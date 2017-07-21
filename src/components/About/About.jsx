import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';

const About = (props) => {
  return (
    <div className='content cf about-page'>
      <h1>{props.layout.position}</h1>
    </div>
  );
};

About.propTypes = {
  personalInfo: PropTypes.object,
  layout: PropTypes.object
};

export default About;
