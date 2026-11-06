import React from 'react';
import './Fantasy.css';
import thriller1 from '../assets/thriller1.jpg';
import thriller2 from '../assets/thriller2.jpg';
import thriller3 from '../assets/thriller3.jpg';
import thriller4 from '../assets/thriller4.jpg';

function Thriller() {
 const series = [
             thriller1,
             thriller2,
             thriller3,
             thriller4
         ]
   return (
     <div className="fantasy">
       <h2>Thriller Series</h2>
       <div className="fantasy-series">
             {series.map((serie,index)=>(
                 <img key = {index} src = {serie} alt="Series"/>
             ))}
       </div>
     </div>
   )
}

export default Thriller
