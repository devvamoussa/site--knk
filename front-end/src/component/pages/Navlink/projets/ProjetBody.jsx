import React from 'react'
import '../../../css/NavLinkcss/ProjetsCss/ProjetBody.css'

function ProjetsBody() {
  return (
    <>
      <div className="contentProject">
          <div className="containerProjet">
            <div className="titleProject">
                <h3>Mes projets</h3>
            </div>
            <div className="projetList">
              <div className="info-iterm">
                <div className='itermArtisn'>
                  <p>Pinture : Maison de 4 pièces</p>
                </div>
                <div className='iterm-disponibilite'>
                  <p>Fermer</p>
                </div>
              </div>
              <div className='content-info-iterm'>
                <p>voir les reponses de l'artisans</p>
              </div>
            </div>
            <div className="projetList">
              <div className="info-iterm">
                <div className='itermArtisn'>
                  <p>Pinture : Maison de 4 pièces</p>
                </div>
                <div className='iterm-disponibilite'>
                  <p>Fermer</p>
                </div>
              </div>
              <div className='content-info-iterm'>
                <p>voir les reponses de l'artisans</p>
              </div>
            </div>
          </div>
      </div>
    
    </>
  )
}

export default ProjetsBody;