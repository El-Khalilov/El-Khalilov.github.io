import PropTypes from 'prop-types';

const personalInfoData = {
  'name': 'Eldar Khalilov',
  'location': 'Waterloo, ON, Canada',
  'resume': 'public/Eldar_Khalilov_resume.pdf',
  'position': 'Frontend Developer',
  'scholar': 'https://scholar.google.ca/citations?user=3SYhjgkAAAAJ&hl=en&oi=sra',
  'social': {
    'linkedin': 'https://www.linkedin.com/in/ekhalilov/',
    'github'  : 'https://github.com/El-Khalilov',
    'angellist': 'https://angel.co/eldar-khalilov'
  },
  'phone'   : '+1-226-868-23-98',
  'email'   : 'el.khalilov@gmail.com',
  'planguages' : ['JavaScript', 'PHP', 'Java'],
  'libraries' : ['HTML', 'CSS3/SCSS', 'jQuery', 'Vue.js/Vuex', 'Webpack', 'Gulp', 'Wordpress',
    'Magento', 'Git', 'JetBrains Meta Programming System (MPS)'],
  'education' : [
    {
      'title' : 'Master of Mathematics (MMath)',
      'university' : 'University of Waterloo, Canada',
      'from': 'Sept 2014',
      'to': 'Jan 2017'
    },
    {
      'title' : 'Master of Applied Science (MASc)',
      'university' : 'ITMO University, St. Petersburg, Russia',
      'from': 'Sept 2010',
      'to': 'June 2012'
    },
    {
      'title' : 'Bachelor of Applied Science (BASc)',
      'university' : 'ITMO University, St. Petersburg, Russia',
      'from': 'Sept 2006',
      'to': 'June 2010'
    }
  ],
  'experience': [
    {
      'position' : 'Software Engineering Intern',
      'company'  : 'JetBrains',
      'from'     : 'March 2017',
      'to'       : 'June 2017',
      'location' : 'St. Petersburg, Russia',
      'projects'     : [
        {
          'type'        : 'Meta Programming Team',
          'project'     : `<a target='_blank' href="https://www.jetbrains.com/mps/">JetBrains Meta Programming System (MPS)</a>
                              - DSL Development Environment`,
          'description' : [
            `Designed and implemented a suite of Domain-Specific Languages (DSL)
            to facilitate code reuse within the MPS environment`,
            `Extended and improved an internal Base Language (an MPS’ counterpart of
            Java) by implementing additional operations over Java collections`
          ]
        }
      ]
    },
    {
      'position' : 'Master’s Researcher',
      'company'  : 'University of Waterloo',
      'from'     : 'Sept 2014',
      'to'       : 'Jan 2017',
      'location' : 'Waterloo, ON, Canada',
      'projects'     : [
        {
          'type'        : 'Frontend/Backend Development',
          'project'     : `<a target='_blank' href="http://www.clafer.org/p/software.html">Web-Based Clafer Tools</a> - tools for modeling, visualization
            and exploration of variability models`,
          'description' : [
            `Performed frontend code refactoring and optimization, as well as
            implemented several new and improved existing features using JavaScript,
            D3.js, and jQuery`,
            `Tested and debugged several crucial components using unit tests and
              functional testing`
          ]
        },
        {
          'type'        : 'Software Development',
          'project'     : `<a target='_blank' href="http://github.com/gsdlab/claferMPS">ClaferMPS</a> - an IDE for modeling of Electric/Electronic
            architectures in automotive domain`,
          'description' : [
            `Collaborated with other researchers to design and implement a DSL for
              modeling of automotive E/E architectures`,
            `Implemented an IDE on top of MPS for editing, analyzing, and visualizing of
              E/E architectures based on <a target='_blank' href="http://www.clafer.org/">Clafer</a> modeling language`
          ]
        }
      ]
    },
    {
      'position' : 'Research Intern',
      'company'  : 'Itemis AG',
      'from'     : 'Dec 2014',
      'to'       : 'Jan 2015',
      'location' : 'Stuttgart, Germany',
      'projects'     : [
        {
          'description' : [
            `Developed a prototype tool for variability modeling in Product-Line
            Engineering based on DSL approach and Clafer modeling language using
            JetBrains MPS (Java)`
          ]
        }
      ]
    },
    {
      'position' : 'Web Developer',
      'company'  : 'PIN Web Agency',
      'from'     : 'Sept 2013',
      'to'       : 'June 2014',
      'location' : 'St. Petersburg, Russia',
      'projects'     : [
        {
          'description' : [
            `Developed cross-browser responsive static websites as well as Wordpress
            and Magento eCommerce themes `,
            'Maintained and updated customer websites as needed',
            `Discussed design and development options with clients to ensure websites
            met their needs`
          ]
        }
      ]
    },
    {
      'position' : 'Frontend Developer',
      'company'  : 'Freelance',
      'from'     : 'Sept 2010',
      'to'       : 'Sept 2013',
      'location' : 'St. Petersburg, Russia',
      'projects'     : [
        {
          'description' : [
            `Translated graphic mockups and templates into interactive web elements
            using Bootstrap, JavaScript, HTML and CSS`,
            'Developed custom Wordpress and jQuery plugins',
            'Provided technical support and managed websites for clients'
          ]
        }
      ]
    }
  ]
};

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

export { personalInfoData };
