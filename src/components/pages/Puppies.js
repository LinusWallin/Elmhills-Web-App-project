import React from 'react'
import Footer from '../Footer'
import Parents from '../Parents'
import { Button } from '../Button'
import SlideShow from '../SlideShow'
import '../../App.css'

function Puppies() {
  const imgs = [
    'images/vecka_1.jpg',
    'images/vecka_2.jpg',
    'images/vecka_3.jpg',
    'images/vecka_4.jpg'
  ];
  const imgInfo = [
    'Vecka 1',
    'Vecka 2',
    'Vecka 3',
    'Vecka 4',
  ];

  return (
    <>
      <div className='text-container'>
        <p className='rubric-1'>
          Den 29/3-2024 fick Maylines Good Girl (Zoe) 4 fina små valpar med
          Manoukaz Dashing Dexter (Dexter). Det är två black and tan hanar,
          en black and tan tik och en aprikosröd tik.
        </p>
        <p className='rubric-2'>
          Som uppfödare har vi höga krav på både mentalitet och hälsa på båda
          förälradjuren. Därför har vi lagt ner mycket arbete i att para Zoe
          med den bästa hanen som funnits tillgänglig (Dexter). Det är nu andra
          kullen som vi har tagit med samma hane.
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
        <p className='top-space rubric-1'>
          Presentation av förälradjuren
        </p>
      </div>
      <Parents/>
      <SlideShow images={imgs} info={imgInfo}/>
      <Footer/>
    </>
  )
}

export default Puppies
