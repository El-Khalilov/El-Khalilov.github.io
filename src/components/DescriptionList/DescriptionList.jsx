import React from 'react';
import PropTypes from 'prop-types';
import './DescriptionList.scss';

const DescriptionList = ({ list }) => (
  <dl className='dl-flex'>
    {list.map(item => [
      <dt key='title'>{item.title}</dt>,
      <dd key='text'>{item.text}</dd>
    ])}
  </dl>
);

DescriptionList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    'title': PropTypes.node,
    'text': PropTypes.node
  })).isRequired
};

export default DescriptionList;
