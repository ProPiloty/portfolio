import React from "react";

// CAROUSEL IMPORTS
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = props => {
  const media = props.media.map((frame, key) => {
    const { src } = frame;
    return (
      <div key={key}>
        <img src={src} alt="screenshot of development project" />
      </div>
    );
  });
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      emulateTouch={true}
      swipeable={true}
      stopOnHover={true}
    >
      {media}
    </Carousel>
  );
};
export default Gallery;
