import { personalInfoData } from './personalInfo';

const layoutData = {
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
