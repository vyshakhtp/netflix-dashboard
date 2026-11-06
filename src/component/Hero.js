import React from 'react'
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Hero() {
  return (
    <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Avengers Infinity War</h1>
          <p>
            The Avengers face their greatest challenge as the powerful Thanos begins his quest to collect the six Infinity Stones. 
          </p>
          <p>
            With the fate of the universe at stake, Earth's mightiest heroes must unite to stop him.
          </p>
          <div className='hero-button'>
            <Button variant='secondary'>
              <i className="bi bi-play-fill "></i>Play
            </Button>
            <Button variant="light">
              <i className="bi bi-info-circle-fill">More Info</i>
            </Button>

          </div>
        </div>
    </div>
  )
}

export default Hero
