import PropTypes from 'prop-types';

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
  'images': PropTypes.arrayOf(PropTypes.string)
});

export const ProjectsTypes = PropTypes.arrayOf(ProjectTypes);

const projectsData = [
  {
    'type': 'app',
    'id': 'clafermps',
    'name': 'ClaferMPS',
    'thumb': 'thumb.png',
    'short_description': 'A set of extensible languages and IDE for modeling E/E architectures using the Clafer modeling language',
    'description': `
      <p>
        Modern automotive electric/electronic (E/E) architectures are growing to the point where architects can no longer
        manually predict the effects of their design decisions. Thus, in addition to applying an architecture reference model
        to decompose their architectures, they also require tools for synthesizing and evaluating candidate architectures
        during the design process.
      </p>
      <p>
        Clafer is a modeling language, which has been used to model variable multi-layer, multi-perspective automotive system
        architectures according to an architecture reference model. Clafer tools allow architects to synthesize optimal
        candidates and evaluate effects of their design decisions. However, since Clafer is a general-purpose structural
        modeling language, it does not help the architects in building models conforming to the given architecture
        reference model.
      </p>
      <p>
        In this work, we present ClaferMPS, a set of extensible languages and IDE for modeling E/E architectures using Clafer.
      </p>
    `,
    'date': '2014 - 2017',
    'technologies': ['Java', 'JetBrains MPS', 'mbeddr'],
    'authors': ['Eldar Khalilov', 'Markus Voelter', 'Jordan Ross', 'Michał Antkiewicz', 'Krzysztof Czarnecki'],
    'source': 'https://github.com/gsdlab/ClaferMPS',
    'publications': [ {
      'title': 'ClaferMPS: Modeling and Optimizing Automotive Electric/Electronic Architectures Using Domain-Specific Languages',
      'url': 'https://uwspace.uwaterloo.ca/handle/10012/11249'
    }, {
      'title': 'Modeling and Optimizing Automotive Electric/Electronic (E/E) Architectures: Towards Making Clafer Accessible to Practitioners',
      'url': 'https://link.springer.com/chapter/10.1007/978-3-319-47169-3_37'
    } ],
    'slider': [
      'slider/slide1.png',
      'slider/slide2.png'
    ],
    'contribution': `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    `
  },
  {
    'type': 'website',
    'id': 'oneil',
    'name': 'International Lion of Judah Conference 2014',
    'thumb': 'thumb2x.jpg',
    'date': '2014',
    'technologies': ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    'contribution': 'Frontend',
    'images': [
      'images/screen-1.jpg',
      'images/screen-2.jpg',
      'images/screen-3.jpg'
    ]
  }
  // {
  //   'type': 'website',
  //   'id': 'oneil3',
  //   'name': 'International Lion of Judah Conference 2014',
  //   'thumb': 'oneil/thumb2x.jpg',
  //   'date': '2014'
  // },
  // {
  //   'type': 'website',
  //   'id': 'oneil4',
  //   'name': 'International Lion of Judah Conference 2014',
  //   'thumb': 'oneil/thumb2x.jpg',
  //   'date': '2014'
  // },
  // {
  //   'type': 'website',
  //   'id': 'oneil5',
  //   'name': 'International Lion of Judah Conference 2014',
  //   'thumb': 'oneil/thumb2x.jpg',
  //   'date': '2014'
  // }

];

export { projectsData };
