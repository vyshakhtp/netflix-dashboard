import React from 'react';
import './TrendingNow.css';
import trending1 from '../assets/trending1.jpg';
import trending2 from '../assets/trending2.jpg';
import trending3 from '../assets/trending3.jpg';
import trending4 from '../assets/trending4.jpg';
import trending5 from '../assets/trending5.jpg';
import trending6 from '../assets/trending6.jpg'
import { Row } from 'react-bootstrap';

function TrendingNow() {
  const movies = [
    trending1,
    trending2,
    trending3,
    trending4,
    trending5,
    trending6
  ];
  return (
    <div className='trend'>
      <Row>
        <h2>Trending Now</h2>
      </Row>
      <Row>
    <div className='trending'>
        {movies.map((movie,index)=>(
            <img key={index} src={movie} alt="Movie" /> 
          ))}
      </div>
      </Row>
      
      
    </div>
  )
}

export default TrendingNow
