import React from 'react'
import { Link } from 'react-router-dom'
import "../../../../css/NavLinkcss/PublicationCss/BodyDescript.css"

function BodyDescrip() {
  return (
    <>
        <div className='containerPublic'>
            <div className='contentLocal'>
                <div className="itermJustify">
                    <div className="titleDescription">
                        <p>En quoi consiste vos travaux?</p>
                    </div>
                    <div className="containerDscrip">
                        
                        <div className="inputDescrip">
                            <p>Donnez une description detaillé de votre projet *</p>
                            <input type="text" />
                        </div>     

                        <div className='btnSuite'>
                            <Link className='linkClass' to="/publication/time-projet"><button>Continuer</button></Link>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        
    </>
  )
}

export default BodyDescrip