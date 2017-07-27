import React from 'react';
import PropTypes from 'prop-types';
import './Date.scss';

const Date = ({ date }) => (
  <div className='date'>{date}</div>
);

Date.propTypes = {
  date: PropTypes.string
};

export default Date;
