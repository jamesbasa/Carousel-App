import React from 'react';
import { Button } from 'react-bootstrap'
import { app } from '../constants'
import '../Carousel/Carousel.css';
import '../index.css';

function About() {
  return (
    <div>
      <header className="title">
        About
      </header>
      <span>
        <p>
          Browse my favorite movies, shows, and more by clicking {app.name} above! Note: these aren't in any particular order.
        </p>
        <br/><br/>
        <p>
          I coded this application using
        </p>
        <a href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer">
          React-Bootstrap
        </a>
        <p>
          and
        </p>
        <a href="https://react-slick.neostack.com/" target="_blank" rel="noreferrer">
          React-Slick
        </a>
        <p>
          to gain more frontend experience.
        </p>
        <br/><br/>
        <Button href="https://jamesbasa.github.io/" target="_blank" rel="noreferrer">My Portfolio</Button>{' '}
      </span>
    </div>
  );
}

export default About;
