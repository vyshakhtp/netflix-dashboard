import React from 'react'
import Action from './Action'
import Comedy from './Comedy'
import Horror from './Horror'

function Movies() {
  return (
    <div className="movies">
       <h1 className="title">Movies</h1>
       <Action />
       <Comedy />
       <Horror />
    </div>
  )
}

export default Movies
