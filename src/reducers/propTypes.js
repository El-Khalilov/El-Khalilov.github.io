import PropTypes from 'prop-types';

export const EducationTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
});

export const PositionTypes = PropTypes.shape({
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  relocate: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    project: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
});

export const personalInfoTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  resume:  PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  scholar: PropTypes.string.isRequired,
  social:  PropTypes.object.isRequired,
  phone:  PropTypes.string.isRequired,
  email:  PropTypes.string.isRequired,
  planguages: PropTypes.arrayOf(PropTypes.string).isRequired,
  libraries: PropTypes.arrayOf(PropTypes.string).isRequired,
  education: PropTypes.arrayOf(EducationTypes).isRequired,
  experience: PropTypes.arrayOf(PositionTypes).isRequired
});

export const layoutTypes = PropTypes.shape({
  nav: PropTypes.array.isRequired
});

export const ProjectTypes = PropTypes.shape({
  'type': PropTypes.string.isRequired,
  'id': PropTypes.string.isRequired,
  'name': PropTypes.string.isRequired,
  'short_description': PropTypes.string,
  'description': PropTypes.string,
  'date': PropTypes.string.isRequired,
  'technologies': PropTypes.arrayOf(PropTypes.string).isRequired,
  'authors': PropTypes.arrayOf(PropTypes.string),
  'source': PropTypes.string,
  'publications': PropTypes.arrayOf(PropTypes.shape({
    'title': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired
  })),
  'slider': PropTypes.arrayOf(PropTypes.string),
  'contribution': PropTypes.string,
  'link': PropTypes.string,
  'images': PropTypes.arrayOf(PropTypes.string)
});

export const ProjectsTypes = PropTypes.arrayOf(ProjectTypes);
