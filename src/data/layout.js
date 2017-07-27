import { personalInfoData } from './personalInfo';
import PropTypes from 'prop-types';

export const layoutTypes = PropTypes.shape({
  intro: PropTypes.string.isRequired,
  nav: PropTypes.array.isRequired
});

const layoutData = {
  'intro': `
    <p>Welcome to my online portfolio!</p>
  `,
  'nav': [
    {
      'type': 'route',
      'title': 'About',
      'url': '/about'
    },
    {
      'type': 'route',
      'title': 'Projects',
      'url': '/projects'
    },
    {
      'type': 'link',
      'title': 'Resume',
      'url': personalInfoData.resume
    }
  ]
};

export { layoutData };
