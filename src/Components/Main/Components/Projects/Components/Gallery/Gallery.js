import React from 'react';

// CAROUSEL IMPORTS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = (props) => {
  const media = props.media.map((frame, key) => {
    const {src, caption} = frame
    return (
      <div key={key}>
        <img src={src} />
        <p className="legend">{caption}</p>
      </div>
    )
  })
  return (
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true} >
        {media}
        {/* <div data-src="/assets/tremorPic.jpg" />
        <div data-src="/assets/tremorPic.jpg" />
        <div data-src="/assets/tremorPic.jpg" />
        <div data-src="/assets/tremorPic.jpg" /> */}
      </Carousel>
  )
}
export default Gallery;
