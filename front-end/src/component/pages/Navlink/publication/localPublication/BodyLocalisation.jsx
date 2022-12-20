import React from 'react'
import { Link } from 'react-router-dom'
import "../../../../css/NavLinkcss/PublicationCss/LocalPublication.css"

function BodyLocalisation() {
  return (
    <>
        <div className='containerPublic'>
            <div className='contentLocal'>
                <div className="itermJustify">
                    <div className="titlelocalisation">
                        <p>Ou souhaitez-vous réaliser vos projets?</p>
                    </div>
                    <div className="containerInput">
                        <div className="itermInfo">
                            <p>Ville *</p>
                            <input type="text" />
                        </div>
                        <div className="itermInfo">
                            <p>Commune *</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="inputDetail">
                        <p>Détails localisation *</p>
                        <input type="text" />
                    </div>
                    <div className="inputCommune">
                    

                    <div className='btnSuite'>
                        <Link className='linkClass' to="/publication/description-projet"><button>Continuer</button></Link>
                    </div>
                    </div>
                </div>
                
            </div>

        </div>

    </>
  )
}

export default BodyLocalisation