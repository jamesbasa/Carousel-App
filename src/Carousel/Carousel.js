import React from 'react';
import Slider from "react-slick";
import CarouselSlide from './CarouselSlide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import '../index.css';

function Carousel(props) {
  const { title, urls } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: true,
  };

  return (
    <div className="carousel">
      <header className="title">
        {title}
      </header>
      <Slider {...settings}>
        {urls.map((url) => {
          return <CarouselSlide url={url}/>
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
