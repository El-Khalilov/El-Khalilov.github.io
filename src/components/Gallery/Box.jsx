import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';


const Box = ({ children, styleName }) => (
  <div className={`box ${ styleName }`}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node,
  styleName: PropTypes.string
};

Box.defaultProps = {
  styleName: ''
};

export default Box;
