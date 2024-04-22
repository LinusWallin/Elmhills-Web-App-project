import React from 'react'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <div className='home'>
        <div className='welcome'>
          <h1>Välkommen till Elmhills kennel!</h1>
          <p>
            Elmhills kennel är en SKK godkänd kennel som bedriver en småskalig uppfödning
            av flerfärgade dvärgpudlar strax utanför Västerås.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
