import React from 'react';
import Section from './Section';
import Subsection from './Subsection';
import IconLink from './IconLink';
import Position from '../Position';
import './About.scss';
import Social from '../Social';
import { personalInfoTypes } from '../../data/personalInfo';
import { layoutTypes } from '../../data/layout';

const About = ({ personalInfo, layout }) => {
  return (
    <div className='content cf about-page'>
      <h1>{personalInfo.name}<span>{layout.position}</span></h1>

      <div className='container'>
        <div className='row'>
          <aside className='col-md-4 sidebar'>
            <Section>
              <IconLink
                icon = 'map-marker'
                text =  {personalInfo.location}
              />

              <IconLink
                icon = 'envelope'
                link = {`mailto:${personalInfo.email}`}
                text =  {personalInfo.email}
              />

              <IconLink
                icon = 'phone'
                link = {`tel:${personalInfo.phone}`}
                text =  {personalInfo.phone}
              />

              <Social list = {personalInfo.social} />
            </Section>

            <Section title='Technical Skills'>
              <Subsection title='Programming Languages'>
                <p>
                  {personalInfo.planguages.join(', ')}
                </p>
              </Subsection>

              <Subsection title='Technologies and libraries'>
                <p>
                  {personalInfo.libraries.join(', ')}
                </p>
              </Subsection>
            </Section>

            <Section title='Education'>
              {personalInfo.education.map((edu, indx) => (
                <div key={indx} className='edu'>
                  <h4>{edu.title}</h4>
                  <p>{edu.university}</p>
                  <div className='date'>
                    {edu.from} - {edu.to}
                  </div>
                </div>
              ))}
            </Section>
          </aside>

          <div className='col-md-8'>
            {personalInfo.experience.length &&
              <Section title='Experience'>
                {personalInfo.experience.map((pos, indx) => (
                  <Position key={indx} data={pos} />
                ))}
              </Section>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  personalInfo: personalInfoTypes,
  layout: layoutTypes
};

export default About;
