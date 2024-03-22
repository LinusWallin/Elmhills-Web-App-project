import React from 'react'
import Footer from '../Footer'
import Parents from '../Parents'
import { Button } from '../Button'
import '../../App.css'

function Puppies() {
  return (
    <>
      <div className='text-container'>
        <p className='rubric-1'>
          Maylines Good Girl (Zoe) är dräktig med Manoukaz Dashing 
          Dexter (Dexter) och beräknas valpa 02-04-2024!
        </p>
        <p className='rubric-2'>
          Vid intresse får du gärna fylla i formuläret genom att klicka
          på knappen nedan.
        </p>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLScVrvBgHytFwiDRYYWPAE-WurW3FpKhxguPbjkBGe-H_BF37g/viewform?vc=0&c=0&w=1&flr=0&pli=1'
          target='_blank'
          rel='noreferrer'
        >
          <Button buttonStyle='btn--secondary'>
            Intresseanmälan
          </Button>
        </a>
      </div>
      <Parents/>
      <Footer/>
    </>
  )
}

export default Puppies
