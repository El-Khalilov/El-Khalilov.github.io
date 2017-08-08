import React from 'react';
import DList from '../DescriptionList';
import DateComponent from '../Date';
import { ProjectTypes } from '../../reducers/propTypes';
import Subsection from '../Subsection';
import Header from '../Header';
import RawHtml from 'react-raw-html';
import Carousel from '../Carousel';
import './Project.scss';

const Project = ({ project }) => {
  const meta = [ {
    'title': 'Date',
    'text': (<DateComponent date={project.date} />)
  },
  {
    'title': 'Authors',
    'text': project.authors.join(', ')
  },
  {
    'title': 'Languages & Technologies',
    'text': project.technologies.join(', ')
  } ];


  return (
    <section className='content cf project-page'>
      <Header title={project.name} />

      <div className='project-meta'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6 col-lg-7'>
              <div className='project-description'>
                <RawHtml.article>{project.description}</RawHtml.article>
              </div>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-5'>
              <DList list={meta}/>
            </div>
          </div>
        </div>
      </div>

      {project.publications && (
        <Subsection title='Publications'>
          <ul className='bulletList'>
            {project.publications.map((item, indx) =>
              <li key={indx}><a className='secondaryLink' href={item.url} target='_blank'>{item.title}</a></li>
            )}
          </ul>
        </Subsection>
      )}

      {project.slider &&
        <Carousel  items = {
          project.slider.map((slide) => `/public/projects/${slide}`)
        }
        />
      }

    </section>
  );
};

Project.propTypes = {
  project: ProjectTypes
};

export default Project;
