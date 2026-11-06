import React from 'react';
import './Action.css';
import action1 from '../assets/trending3.jpg';
import action6 from '../assets/toprated4.jpg';
import action2 from '../assets/action2.jpg';
import action3 from '../assets/action3.jpg';
import action4 from '../assets/action4.jpg';
import action5 from '../assets/action5.jpg';

function Action() {
    const movies = [
        action1,
        action2,
        action3,
        action4,
        action5,
        action6
    ]
  return (
    <div className="action">
      <h2>Action Movies</h2>
        <div className="action-movie">
            {movies.map((movie,index)=>(
                <img key={index} src={movie} alt="action" />
            ))}
        </div>
    </div>
  )
}

export default Action
