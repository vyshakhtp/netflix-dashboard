import React from 'react'
import toprated1 from '../assets/toprated1.jpg';
import toprated2 from '../assets/toprated2.jpg';
import toprated3 from '../assets/toprated3.jpg';
import toprated4 from '../assets/toprated4.jpg';
import toprated5 from '../assets/toprated5.jpg';
import toprated6 from '../assets/action4.jpg';
import './TopRated.css';

function TopRated() {
  const movies = [
    toprated1,
    toprated2,
    toprated3,
    toprated4,
    toprated5,
    toprated6
  ]
  return (
    <div className="toprated">
        <h2>Top Rated</h2>
        <div className='toprated-movie'>
          {movies.map((movie,index)=>(
            <img src={movie} key={index} alt="Top-Rated" />
          ))}
        </div>
    </div>
  )
}

export default TopRated
