import React from 'react'
import Card from './Card'
import './Card.css'

function Parents() {
  return (
      <div className='cards'>
        <div className='card-container'>
          <div className='card-wrap'>
            <ul className='cards-list'>
              <Card
                src='images/zoe.jpeg'
                header='Zoe'
                text='Zoe är en dvärgpudeltik född 2018
                med fin exteriör och bra mentalitet. 
                Hon är en mångsidig hund som har varit 
                aktiv i bland annat nose work, rallylydnad, 
                tävlingslydnad, agility, spår, drag och 
                trickträning. För några år sedan deltog hon 
                även på en del utställningar där hon fick goda 
                resultat med fina lovord från flera domare. 
                Zoe har en underbar personlighet som kan 
                beskrivas som humoristisk, pratglad, supergosig, 
                lugn och genomsnäll. I Zoes sällskap får man 
                sig alltid ett skratt.'
              />
              <Card
                src='images/dexter.webp'
                header='Dexter'
                text='Dexter är en danskfödd dvärgpudelhane med 
                mycket bra exteriör och mentalitet. Han är en 
                social, nyfiken och självsäker hund. Dexter har 
                deltagit på flertalet utställningar där han har 
                fått mycket fina omdömen och titlar. Du kan läsa 
                mer om Dexter på hans Facebooksida ”Manoukaz 
                Dashing Dexter”.'
              />
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Parents
