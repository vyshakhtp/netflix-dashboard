import React from 'react';
import './Fantasy.css';
import fantasy1 from '../assets/fantasy1.jpg';
import fantasy2 from '../assets/fantasy2.jpg';
import fantasy3 from '../assets/fantasy3.jpg';
import fantasy4 from '../assets/fantasy4.jpg';
function Fantasy() {
    const series = [
            fantasy1,
            fantasy2,
            fantasy3,
            fantasy4
        ]
  return (
    <div className="fantasy">
      <h2>Fantasy Series</h2>
      <div className="fantasy-series">
            {series.map((serie,index)=>(
                <img key = {index} src = {serie} alt="series" />
            ))}
      </div>
    </div>
  )
}

export default Fantasy
