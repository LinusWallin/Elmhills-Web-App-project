import React from 'react'
import Footer from '../Footer'
import AboutCard from '../AboutCard'

function About1() {
  return (
    <>
        <div className='cards'>
            <div className='card-container'>
                <div className='card-wrap'>
                    <ul className='cards-list'>
                        <AboutCard
                            src='images/aboutpage.jpg'
                            header='Ella'
                            items={[
                                'Har genomgått SKK:s hunduppfödarutbildning',
                                'Utbildad djurvårdare på nivå två',
                                'Har arbetat som djurvårdare på veterinärklinik',
                                'Lång erfarenhet inom pudelfrisering'
                            ]}
                            text='
                                Min största dröm som liten var att ha en egen hund 
                                och den gick i uppfyllelse 2013, när vi skaffade 
                                vår första pudel, Kacey. Jag har alltid varit 
                                intresserad av djur och ville som liten bli veterinär. 
                                Det stora hundintresset gjorde att jag valde att gå 
                                Naturbruksprogrammet med inriktning hund på 
                                Realgymnasiet. Genom utbildningen fick jag bland annat 
                                praktisera ett år på en kennel med hundpensionat och 
                                hundsalong. Där fick jag lära mig allt som har med 
                                hunduppfödning att göra och frisering av flera hundraser 
                                för både utställning och vardag. Jag har även vid sidan 
                                av detta gått på klippkurser för välkända pudelutställare 
                                och friserat förutom mina egna hundar även vänners hundar.
                                
                                Under min gymnasieutbildning genomgick jag SKK:s 
                                hunduppfödarutbildning, vilket gjorde att intresset 
                                för att en dag ha en egen kennel med uppfödning av 
                                pudlar väcktes.
                                
                                Via min gymnasieutbildning fick jag också möjlighet att 
                                praktisera på en veterinärklinik under mitt sista år som 
                                gav mig praktisk erfarenhet av bland annat kejsarsnitt, 
                                dräktighetsundersökningar och SKK-röntgen. Jag fick även 
                                lära mig om vanliga sjukdomar hos hundar och hur dessa 
                                kan behandlas och förebyggas. Efter gymnasieexamen kunde 
                                jag titulera mig som djurvårdare på nivå två och har 
                                jobbat som det nu i tre somrar.
                                
                                Hundsport är något som jag alltid har tyckt har varit 
                                kul och jag har velat prova på allt möjligt. Jag har 
                                gått kurser i agility, rallylydnad, tävlingslydnad, 
                                viltspår, drag, nose work, hundutställning och 
                                trickträning. Några gånger har jag även tagit mig ut på 
                                tävlingsbanorna.'
                        />
                        <AboutCard
                            src='images/mamma.jpg'
                            header='Päivi'
                            items={[
                                'Uppvuxen med hundar.', 
                                'Har en kärlek till djur av alla slag, men särskilt för hundar.', 
                                'Har gått lydnadskurser och spår, men hundpromenader är nog mest min ”grej”.'
                            ]}
                            text='
                                Då jag är uppvuxen med flera husdjur, visste jag hur 
                                mycket glädje man kunde ha av en hund.  Det är ju också 
                                vetenskapligt bevisat att relationen till djur ofta har 
                                en positiv påverkan på barn. Beslutet om att skaffa en 
                                fyrbent vän till familjen blev ett faktum 2013, då vi 
                                skaffade oss en black and tan mellanpudel. 
                                
                                Först och främst sökte vi efter en bra familjehund. 
                                Vår ena dotter, Ella, hade ambitioner om att testa 
                                olika hundsporter och gå på utställningar, så en pudel 
                                blev det naturliga valet för oss. Under åren växte ett 
                                gemensamt intresse fram för oss för avel av aprikosröda 
                                och black and tan dvärgpudlar, med fokus på mentalt och 
                                fysiskt friska hundar.'
                        />
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default About1
