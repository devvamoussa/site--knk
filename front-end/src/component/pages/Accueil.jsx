import React from 'react'
import AccueilNav from '../AccueilNav'
import BodyAccueil from '../content/BodyAccueil'
import Footer from '../content/Footer'

function Accueil() {
  return (
    <div>
        <div className="contentAccueil">
            <AccueilNav />
            <BodyAccueil />
            <Footer/>
        </div>
    </div>
  )
}

export default Accueil