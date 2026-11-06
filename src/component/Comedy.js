import React from 'react';
import comedy1 from '../assets/comedy1.jpg';
import comedy2 from '../assets/comedy2.jpg';
import comedy3 from '../assets/comedy3.jpg';
import comedy4 from '../assets/comedy4.jpg';
import comedy5 from '../assets/comedy5.jpg';
import comedy6 from '../assets/comedy6.jpg';
import './Comedy.css';

function Comedy() {
    const movies = [
        comedy1,
        comedy2,
        comedy3,
        comedy4,
        comedy5,
        comedy6,
    ]
  return (
    <div className="comedy">
      <h2>Comedy Movies</h2>
      <div className="comedy-movie">
            {movies.map((movie,index)=>(
                <img key = {index} src = {movie} alt="series"/>
            ))}
      </div>
    </div>
  )
}

export default Comedy
