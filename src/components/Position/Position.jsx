import React from 'react';
import './Position.scss';
import { PositionTypes } from '../../data/personalInfo';
import RawHtml from 'react-raw-html';
import DateComponent from '../Date';

const Position = ({ data }) => {
  return (
    <div className='position'>
      <div className='pos-header'>
        <div className='pos-title'>
          <h3>{data.position}</h3>
          <h4>{data.company}</h4>
        </div>

        <div className='pos-meta'>
          <DateComponent date={`${data.from} - ${data.to}`} />

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
              <ul className='bulletList'>
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
