import React from 'react';
import PropTypes from 'prop-types';

import Social from '../Social';
import Nav from '../Nav';

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

        <Nav items={layout.nav} />

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
  personalInfo: PropTypes.object,
  layout: PropTypes.object
};

export default Main;
