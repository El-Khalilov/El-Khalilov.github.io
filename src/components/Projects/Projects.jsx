import React from 'react';
import './Projects.scss';

import { ProjectsTypes } from '../../data/projects';

import Header from '../Header';
import ImgBox from '../ImgBox';
import BigBox from '../BigBox';
import { Gallery } from '../Gallery';
import Section from '../Section';

const Projects = ({ projects }) => (
  <div className='content projects-page'>

    <Header title='Projects' />

    <Section>
      <Gallery>
        {projects.filter(p => p.type === 'app')
          .map((project, indx) => (
            <BigBox key={indx} project={project} styleName='col-xs-12 col-md-6 col-lg-12' />
          ))}
      </Gallery>
    </Section>

    <Section title='Websites Development'>
      <Gallery>
        {projects.filter(p => p.type === 'website')
          .map((project, indx) => (
            <ImgBox key={indx} project={project} styleName='col-xs-12 col-sm-4 col-lg-3' />
          ))}
      </Gallery>
    </Section>
  </div>
);

Projects.propTypes = {
  projects: ProjectsTypes
};


export default Projects;
