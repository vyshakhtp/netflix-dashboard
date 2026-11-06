import React from 'react';
import './Horror.css';
import horror1 from '../assets/horror1.jpg';
import horror2 from '../assets/horror2.jpg';
import horror3 from '../assets/horror3.jpg';
import horror4 from '../assets/horror4.jpg';

function Horror() {
    const movies =[
        horror1,
        horror2,
        horror3,
        horror4
    ]
  return (
    <div className="horror">
      <h2>Horror Movies</h2>
      <div className="horror-movie">
            {movies.map((movie,index)=>(
                <img key={index} src={movie} alt="action" />
            ))}
      </div>
    </div>
  )
}

export default Horror
