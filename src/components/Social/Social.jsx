import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-fa';
import './Social.scss';

const Social = ({ list }) => {
  return (
    <div className='socials'>
      {Object.keys(list).map(key => (
        <a target='_blank' key={key} href={list[key]}><Icon name={key} /></a>
      ))}
    </div>
  );
};

Social.propTypes = {
  list: PropTypes.object.isRequired
};

export default Social;
