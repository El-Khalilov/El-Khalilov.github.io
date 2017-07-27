import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';

const Gallery = ({ children, styleName }) => (
  <div className={`container gallery cf ${ styleName }`}>
    <div className='row'>
      {children}
    </div>
  </div>
);


Gallery.propTypes = {
  children: PropTypes.node,
  styleName: PropTypes.string
};

Gallery.defaultProps = {
  styleName: ''
};

export default Gallery;
