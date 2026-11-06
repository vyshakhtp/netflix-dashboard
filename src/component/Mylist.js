import React from 'react';
import movies1 from "../assets/trending3.jpg";
import movies2 from "../assets/trending4.jpg";
import movies3 from "../assets/trending5.jpg";
import movies4 from "../assets/toprated1.jpg";
import movies5 from "../assets/toprated2.jpg";

import series1 from "../assets/fantasy1.jpg";
import series2 from "../assets/fantasy2.jpg";
import series3 from "../assets/thriller1.jpg";
import series4 from "../assets/thriller4.jpg";
import series5 from "../assets/adventure2.jpg";

function Mylist() {
  const movies=[
    movies1,
    movies2,
    movies3,
    movies4,
    movies5,
  ];
  const series =[
    series1,
    series2,
    series3,
    series4,
    series5
  ]
  return (
    <div>
      <div className="horror">
        <h2>Movies</h2>
        <div className="horror-movie">
              {movies.map((movie,index)=>(
                  <img key={index} src={movie} alt="action" />
              ))}
        </div>
      </div>
      <div className="fantasy">
        <h2>Series</h2>
        <div className="fantasy-series">
              {series.map((serie,index)=>(
                  <img key = {index} src = {serie} alt="series" />
              ))}
        </div>
      </div>
    </div>
  )
}

export default Mylist
