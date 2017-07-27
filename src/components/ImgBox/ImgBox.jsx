import React from 'react';
import PropTypes from 'prop-types';
import './ImgBox.scss';
import { Box } from '../Gallery';
import { Link } from 'react-router-dom';

const imgBox = ({ project, styleName }) => {
  const projectPath = `/public/projects/${project.id}`;

  return (
    <Box styleName={`img-box ${ styleName }`}>
      <div className='box-inner'>
        <div className='img-container'>
          <Link to={`/projects/${project.id}`}>
            <img src={`${projectPath}/${project.thumb}`} alt=''/>
            <div className='caption'>
              <h2>{project.name}</h2>
              <div className='project-date'><span>Year:</span>{project.date}</div>
            </div>
          </Link>
        </div>
      </div>
    </Box>
  );
};

imgBox.propTypes = {
  project: PropTypes.object.isRequired,
  styleName: PropTypes.string
};

imgBox.defaultProps = {
  styleName: ''
};

export default imgBox;
