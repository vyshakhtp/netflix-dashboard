import React from 'react'
import Fantasy from './Fantasy'
import Thriller from './Thriller'
import Adventure from './Adventure'

function Series() {
  return (
    <div className="series">
      <h1>Series</h1>
      <Fantasy />
      <Thriller />
      <Adventure />
    </div>
  )
}

export default Series
