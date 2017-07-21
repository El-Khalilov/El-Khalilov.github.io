import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/lib/fa';
// import RawHtml from 'react-raw-html';
import './Main.scss';
// <div className='contacts' >
//   <FaMapMarker  size={this.state.iconSize} />{this.props.location}
// </div>

const mapStateToProps = state => {
  return {
    intro: state.intro,
    position: state.position,
    resume: state.resume,
    contacts: state.contacts,
    title: state.title,
    location: state.location
  };
};

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
    return (
      <div className={`intro ${this.state.mounted ? 'mounted' : ''}`}>
        <h1>{this.props.title}</h1>
        <h3>{this.props.position} | {this.props.location}</h3>

        <nav className='nav'>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <a target='_blank' href={this.props.resume}>Resume</a>
        </nav>

        <div className='contacts' >
          <a className='underline' href={`mailto:${this.props.contacts.email}`}>{this.props.contacts.email}</a>
          <a className='underline' href={`tel:${this.props.contacts.phone}`}>{this.props.contacts.phone}</a>
        </div>


        <div className='socials'>
          <a target='_blank'href={this.props.contacts.linkedin}><FaLinkedin  size={this.state.iconSize} /></a>
          <a target='_blank'href={this.props.contacts.github}><FaGithub  size={this.state.iconSize} /></a>
        </div>
      </div>
    );
  }
}


Main.propTypes = {
  intro: PropTypes.string,
  position: PropTypes.string,
  resume: PropTypes.string,
  contacts: PropTypes.object,
  title: PropTypes.string,
  location: PropTypes.string
};

export default connect(
  mapStateToProps
)(Main);
