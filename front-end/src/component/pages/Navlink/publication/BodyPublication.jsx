import React from 'react'
import { Link } from 'react-router-dom'
import "../../../css/NavLinkcss/PublicationCss/BodyPublication.css"


function BodyPublication() {
  return (
    <>
        <div className='containerPublic'>
            <div className='contentPublic-iterm'>
                <div className="titlePublic">
                    <p>Quel votre projet?</p>
                </div>
                <div className="itermInfo">
                    <p>Décrivez vos travaux à réaliser et entrez en contact avec <br />des artisans qualifiés prés de chez vous.</p>
                </div>
                <div className="inputNavArt">
                    <div className="inputContent">
                        <input type="text" placeholder='Par exemple: peinture'/>
                        
                    </div>

                    <div className='btnSeachArt'>
                        <Link className='linkClass' to="/publication/localisation"><button>Trouver un artisan</button></Link>
                    </div>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default BodyPublication