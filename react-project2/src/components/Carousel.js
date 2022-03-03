import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const ImageCarousel = () => {
  const images = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  return (
    <Carousel images={images} className='carousel' />
  );
};

export default ImageCarousel;