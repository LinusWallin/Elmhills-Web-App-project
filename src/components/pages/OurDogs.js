import React from 'react'
import Footer from '../Footer'
import Card from '../Card'

function OurDogs() {
  return (
    <>
        <div className='cards'>
            <div className='card-container'>
                <div className='card-wrap'>
                    <ul className='cards-list'>
                        <Card
                            src='images/zoe2.jpg'
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
                            src='images/kacey.jpg'
                            header='Kacey'
                            text='Kacey är vår allra första pudel som har bidragit 
                            till mycket av den kunskap som vi uppfödare har om 
                            rasen idag. Med henne har vi gått på klippkurser, 
                            vardagslydnad och testat på flera olika hundsporter. 
                            Hon har varit mest aktiv inom agility och har även 
                            tävlat några gånger. Kacey är en black and tan 
                            mellanpudel som är född 2013 och hon är vår familjehund.'
                        />
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default OurDogs
