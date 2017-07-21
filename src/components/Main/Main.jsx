import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/lib/fa';
// import RawHtml from 'react-raw-html';
import './Main.scss';
// <div className='contacts' >
//   <FaMapMarker  size={this.state.iconSize} />{this.props.location}
// </div>

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconSize: 20,
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    const { personalInfo, layout } = this.props;

    return (
      <div className={`intro ${this.state.mounted ? 'mounted' : ''}`}>
        <h1>{personalInfo.name}</h1>
        <h3>{layout.position} | {personalInfo.location}</h3>

        <nav className='nav'>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <a target='_blank' href={personalInfo.resume}>Resume</a>
        </nav>

        <div className='contacts' >
          <a className='underline' href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a className='underline' href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
        </div>


        <div className='socials'>
          <a target='_blank'href={personalInfo.linkedin}><FaLinkedin  size={this.state.iconSize} /></a>
          <a target='_blank'href={personalInfo.github}><FaGithub  size={this.state.iconSize} /></a>
        </div>
      </div>
    );
  }
}


Main.propTypes = {
  personalInfo: PropTypes.object,
  layout: PropTypes.object
};

export default Main;
