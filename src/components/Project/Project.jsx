import React from 'react';
import DList from '../DescriptionList';
import DateComponent from '../Date';
import { ProjectTypes } from '../../data/projects';
import Subsection from '../Subsection';
import Header from '../Header';
import Carousel from '../Carousel';
import RawHtml from 'react-raw-html';
import './Project.scss';

const Project = ({ project }) => {
  const projectPath = `/public/projects/${project.id}`;

  const leftMeta = [ {
    'title': 'Date',
    'text': (<DateComponent date={project.date} />)
  },
  {
    'title': 'Technologies',
    'text': project.technologies.join(', ')
  } ];

  const rightMeta = [];

  if (project.authors) {
    rightMeta.push({
      'title': 'Authors',
      'text': project.authors.join(', ')
    });
  }

  if (project.source) {
    rightMeta.push({
      'title': 'Links',
      'text': <a className = 'underline' href={project.source} target='_blank'>Source</a>
    });
  }


  return (
    <section className='content cf project-page'>
      <Header title={project.name} />

      <div className='project-meta'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <DList list={leftMeta}/>
            </div>
            <div className='col-xs-12 col-md-5'>
              <DList list={rightMeta}/>
              {project.link &&
                <p><a className = 'underline' href={project.link} target='_blank'>View Website</a></p>
              }
            </div>
          </div>
        </div>
      </div>

      {project.description &&
        <Subsection title='Description'>
          <div className='project-description secondaryLink'>
            <RawHtml.article>{project.description}</RawHtml.article>
          </div>
        </Subsection>
      }

      {project.contribution &&
        <Subsection title='My Contribution'>
          <RawHtml.article>{project.contribution}</RawHtml.article>
        </Subsection>
      }

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
        <div className='container-fluid'>
          <div className='row center-lg'>
            <div className='col-lg-10'>
              <Carousel  items = {
                project.slider.map((slide) => `${projectPath}/${slide}`)
              }
              />
            </div>
          </div>
        </div>
      }

      {project.images &&
        <div className='container-fluid'>
          <div className='row center-lg'>
            <div className='col-lg-9'>
              <div className='project-gallery'>
                {project.images.map((img, indx) =>
                  <figure key={indx}><img src={`${projectPath}/${img}`} /></figure>
                )}
              </div>
            </div>
          </div>
        </div>
      }

    </section>
  );
};

Project.propTypes = {
  project: ProjectTypes
};

export default Project;
