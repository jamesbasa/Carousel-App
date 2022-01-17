import React from 'react';
import "./CarouselSlide.css"

function CarouselSlide(props) {
  const { url } = props;

  return (
    <a href={url} target="_blank">
      <div className="slide">
        <img className="slide__img" src={url} />
        <p>
          Click to View
        </p>
      </div>
    </a>
  );
}

export default CarouselSlide;
