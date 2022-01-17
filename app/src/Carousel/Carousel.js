import React from 'react';
import Slider from "react-slick";
import CarouselSlide from './CarouselSlide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

function Carousel() {
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
    <div>
      <div className="Carousel">
        <div className="Carousel__header">
          <a href="/" >
            Carousel App
          </a>
        </div>
        <Slider {...settings}>
          <CarouselSlide url="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-600w-1048185397.jpg"/>
          <CarouselSlide url="https://image.shutterstock.com/image-photo/tourism-concept-old-wooden-pier-600w-309232898.jpg"/>
          <CarouselSlide url={"https://image.shutterstock.com/image-photo/wooden-pier-that-stretches-out-600w-1547008970.jpg"}/>
          <CarouselSlide url={"https://image.shutterstock.com/image-photo/wooden-bridge-on-cristal-clear-600w-534728500.jpg"}/>
          <CarouselSlide url={"https://image.shutterstock.com/image-photo/beach-beautiful-sea-water-maldives-600w-1294518163.jpg"}/>
          <CarouselSlide url={"https://image.shutterstock.com/image-photo/wooden-batten-bridge-juts-out-600w-765127957.jpg"}/>
          <CarouselSlide url={"https://image.shutterstock.com/image-photo/jetty-blue-sunny-serenity-600w-476916280.jpg"}/>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
