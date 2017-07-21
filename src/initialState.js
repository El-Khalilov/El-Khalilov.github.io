const initialState = {
  title: 'Eldar Khalilov',
  location: 'Waterloo, Canada',
  intro: `
    <p>Welcome to my online portfolio!</p>
  `,
  position: 'Frontend Developer',
  resume: 'public/Eldar_Khalilov_resume.pdf',
  contacts: {
    'linkedin': 'https://www.linkedin.com/in/ekhalilov/',
    'github'  : 'https://github.com/El-Khalilov',
    'phone'   : '+1-226-868-23-98',
    'email'   : 'el.khalilov@gmail.com'
  },
  titles: {
    projects: 'Projects',
    'web': 'Websites Development'
  },
  projects: [],
  websites: []
};

export default initialState;
