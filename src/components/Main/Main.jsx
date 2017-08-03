import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import MainNav from '../../containers/MainNav';
import './Main.scss';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconSize: 20,
      mounted: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 300);
  }

  render() {
    const { personalInfo } = this.props;

    return (
      <div className={`intro ${this.state.mounted ? 'mounted' : ''}`}>
        <h1>{personalInfo.name}</h1>
        <h3>{personalInfo.position} | {personalInfo.location}</h3>

        <MainNav />

        <div className='contacts underline' >
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
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
