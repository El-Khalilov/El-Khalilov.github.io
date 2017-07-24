import React from 'react';
import './Position.scss';
import { PositionTypes } from '../../data/personalInfo';
import RawHtml from 'react-raw-html';

const Position = ({ data }) => {
  return (
    <div className='position'>
      <div className='pos-header'>
        <div className='pos-title'>
          <h3>{data.position}</h3>
          <h4>{data.company}</h4>
        </div>

        <div className='pos-meta'>
          <div className='date'>
            {data.from} - {data.to}
          </div>

          <div className='pos-location'>
            {data.location}
          </div>
        </div>
      </div>

      <div className='pos-project-list'>
        {data.projects.map((project, indx) => (
          <div key={indx} className='pos-project'>
            {project.type && <div className='pos-type'>{project.type}</div>}
            {project.project && <div className='pos-project-name'><RawHtml.p>{project.project}</RawHtml.p></div>}
            {project.description.length &&
              <ul>
                {project.description.map((bullet, bIndx) => (
                  <RawHtml.li key={bIndx}>{bullet}</RawHtml.li>
                ))}
              </ul>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

Position.propTypes = {
  data: PositionTypes
};

export default Position;
