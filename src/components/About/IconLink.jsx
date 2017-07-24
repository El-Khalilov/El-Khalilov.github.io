import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-fa';

const IconLink = ({ icon, link, text }) => {
  const textEl =  link ?
    <a className='underline' href={link}>{text}</a> :
    <span>{text}</span>;

  return (
    <div className='icon-link'>
      <Icon name={icon} />
      {textEl}
    </div>
  );
};

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default IconLink;
