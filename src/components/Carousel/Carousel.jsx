import React from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';

const CarouselComponent = ({ items, ...props }) => (
  <Carousel {...props}>
    {items.map((slide, indx) => <img key={indx} src={slide}/>)}
  </Carousel>
);

CarouselComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

CarouselComponent.defaultProps = {
  dynamicHeight: true,
  emulateTouch: true,
  showArrows: true,
  showThumbs: false,
  showIndicators: false,
  infiniteLoop: true
};


export default CarouselComponent;
