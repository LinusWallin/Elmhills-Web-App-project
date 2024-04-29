import React from 'react'
import Footer from '../Footer'
import SlideShow from '../SlideShow';

function Previous() {
  const test = [
    '../images/prev_puppies_3.jpg',
    '../images/prev_puppies_2.jpg',
    '../images/prev_puppies_1.jpg',
  ];
  const test2 = [
    '',
    '',
    '',
  ];

  return (
    <>
      <div className='prev'>
      </div>
      <div className='text-container-left text-container'>
        <p className='rubric-1'>
          Valpar 2022
        </p>
        <p className='rubric-2'>
        Den 25:e mars 2022 tittade den första valpen ut. I nio 
        veckor hade vi tålmodigt väntat på att få se vad som 
        fanns i magen. Spänningen var olidlig. Vilka färger 
        skulle valparna ha? Hur många skulle det vara? Kön? 
        Många frågor susade genom tankarna, men vips så var alla 
        fyra småttingar ute och vi kunde beundra våra första 
        egenuppfödda valpar. Det blev många nätter med minimal 
        sömn till en början, men sedan blev jobbet smått lättare 
        en stund till att sedan vara full rulle igen. Rätt vad 
        det var så hade alla valpar flyttat till sina egna hem 
        och det blev tomt i vårt hus. Nedan finner du några härliga
        bilder från denna kull!
        </p>
      </div>
      <SlideShow images={test} info={test2}/>
      <Footer/>
    </>
  )
}

export default Previous
