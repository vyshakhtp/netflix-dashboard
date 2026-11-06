import React from 'react'
import Hero from './Hero'
import TrendingNow from './TrendingNow'
import TopRated from './TopRated'
import Action from './Action'
import Comedy from './Comedy'

function Home() {
  return (
    <div>
      <Hero />
      <TrendingNow />
      <TopRated />
      <Action />
      <Comedy />
    </div>
  )
}

export default Home
