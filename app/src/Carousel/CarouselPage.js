import React from 'react';
import Carousel from './Carousel'
import { carousels } from '../constants'
import '../index.css';

function CarouselPage() {
  const movieCarousel = {
    title: carousels.movies,
    urls:
      [
        "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-600w-1048185397.jpg",
        "https://image.shutterstock.com/image-photo/tourism-concept-old-wooden-pier-600w-309232898.jpg",
        "https://image.shutterstock.com/image-photo/wooden-pier-that-stretches-out-600w-1547008970.jpg",
        "https://image.shutterstock.com/image-photo/wooden-bridge-on-cristal-clear-600w-534728500.jpg",
        "https://image.shutterstock.com/image-photo/beach-beautiful-sea-water-maldives-600w-1294518163.jpg",
        "https://image.shutterstock.com/image-photo/wooden-batten-bridge-juts-out-600w-765127957.jpg",
        "https://image.shutterstock.com/image-photo/jetty-blue-sunny-serenity-600w-476916280.jpg",
      ],
  };

  const showCarousel = {
    title: carousels.shows,
    urls:
      [
        "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-600w-1048185397.jpg",
        "https://image.shutterstock.com/image-photo/tourism-concept-old-wooden-pier-600w-309232898.jpg",
        "https://image.shutterstock.com/image-photo/wooden-pier-that-stretches-out-600w-1547008970.jpg",
        "https://image.shutterstock.com/image-photo/wooden-bridge-on-cristal-clear-600w-534728500.jpg",
        "https://image.shutterstock.com/image-photo/beach-beautiful-sea-water-maldives-600w-1294518163.jpg",
        "https://image.shutterstock.com/image-photo/wooden-batten-bridge-juts-out-600w-765127957.jpg",
        "https://image.shutterstock.com/image-photo/jetty-blue-sunny-serenity-600w-476916280.jpg",
      ],
  };

  const allCarousels = [
    movieCarousel,
    showCarousel,
  ];

  return (
    <div>
      {allCarousels.map((c) => {
        return <Carousel title={c.title} urls={c.urls}/>
      })}
    </div>
  );
}

export default CarouselPage;
