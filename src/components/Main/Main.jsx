import React from 'react';
import PropTypes from 'prop-types';

import Social from '../Social';
import MainNav from '../../containers/MainNav';

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
    setTimeout(()=>this.setState({ mounted: true }), 1000);

  }

  render() {
    const { personalInfo } = this.props;

    return (
      <div className={`intro ${this.state.mounted ? 'mounted' : ''}`}>
        <h1>{personalInfo.name}</h1>
        <h3>{personalInfo.position} | {personalInfo.location}</h3>

        <MainNav />

        <div className='contacts' >
          <a className='underline' href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a className='underline' href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
        </div>

        <Social list = {personalInfo.social} />
      </div>
    );
  }
}


Main.propTypes = {
  personalInfo: PropTypes.object
};

export default Main;
