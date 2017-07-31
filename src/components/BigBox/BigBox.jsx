import React from 'react';
import PropTypes from 'prop-types';
import './BigBox.scss';
import DateComponent from '../Date';
import { Box } from '../Gallery';
import { Link } from 'react-router-dom';

const BigBox = ({ project, styleName }) => {
  const projectPath = `/public/projects/${project.id}`;

  return (
    <Box styleName={`box-big ${ styleName }`}>
      <div className='box-inner'>
        <div className='img-container'>
          <Link to={`/projects/${project.id}`}>
            <img src={`${projectPath}/${project.thumb}`} alt=''/>
          </Link>
        </div>

        <div className='box-content'>
          <div className='box-content-header'>
            <h2><Link className='underline' to={`/projects/${project.id}`}>{project.name}</Link></h2>
            <DateComponent date={project.date} />
          </div>
          <p className='description'>
            {project.short_description}
          </p>
        </div>

        <Link className='btn more-btn' to={`/projects/${project.id}`}/>

      </div>
    </Box>
  );
};

BigBox.propTypes = {
  project: PropTypes.object.isRequired,
  styleName: PropTypes.string
};

BigBox.defaultProps = {
  styleName: ''
};

export default BigBox;
