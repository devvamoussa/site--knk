import React from 'react'
import { Link } from 'react-router-dom'
import SeachArtisan from './SeachArtisan'

function BodyRecommande() {
  return (
    <>
        <div className='containerPublic'>
            <div className='itermseach'>
                <div className="itermseach">
                    <div className="containerSeachArt">
                        <div className="seachArtisanArt">
                            <SeachArtisan />
                        </div>  
                    </div>
                </div>
                
            </div>

            </div>
    </>
  )
}

export default BodyRecommande