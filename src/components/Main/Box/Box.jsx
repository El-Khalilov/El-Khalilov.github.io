import React from 'react';
import PropTypes from 'prop-types';
import './Box.scss';


const Box = ({ children, styleName }) => (
  <div className={`box ${ styleName }`}>
    <div className='box-inner'>
      {children}
    </div>
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
