import React, { Component } from 'react';
import './AnimatedWrapper.scss';

const AnimatedWrapperComponent = WrappedComponent => class AnimatedWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationClass: 'animated-page-enter'
    };
  }

  setClass(className) {
    this.setState(() => {
      return { animationClass: className };
    });
  }

  componentWillAppear(cb) {
    setTimeout(() => {
      this.setClass('animated-page-enter animated-page-enter-active');
      cb();
    }, 300);
  }


  componentWillEnter(cb) {
    this.setClass('animated-page-enter');
    setTimeout(
      () => {
        this.setClass('animated-page-enter animated-page-enter-active');
      }, 500);
    cb();
  }

  componentWillLeave(cb) {
    this.setClass('animated-page-leave animated-page-leave-active');
    setTimeout(cb, 500);
  }

  render() {
    return (
      <div className={`animated-page-wrapper ${this.state.animationClass}`}>
        <WrappedComponent {...this.props} />
      </div>
    );
  }
};

export default AnimatedWrapperComponent;
