import React from 'react';
import './Fantasy.css';
import adventure1 from '../assets/adventure1.jpg';
import adventure2 from '../assets/adventure2.jpg';
import adventure3 from '../assets/adventure3.jpg';
import adventure4 from '../assets/adventure4.jpg';

function Adventure() {
   const series = [
              adventure1,
              adventure2,
              adventure3,
              adventure4
          ]
    return (
      <div className="fantasy">
        <h2>Adventure Series</h2>
        <div className="fantasy-series">
              {series.map((serie,index)=>(
                  <img key = {index} src = {serie} alt="series" />
              ))}
        </div>
      </div>
    )
}

export default Adventure
