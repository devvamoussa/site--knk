import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import "../component/css/AccueilNav.css"



function AccueilNav() {
  return (
    <div>
        <div className="NavContent">
            <div className='iconNav'> <AiFillFacebook /> </div>
            <div className='iconNav'> <AiFillYoutube /> </div>
            <div className='iconNav'> <FaInstagramSquare /> </div>
            <div className='iconNav'> <AiFillLinkedin /> </div>
            <div className='iconNav'> <AiFillTwitterSquare /> </div>
        </div>
    </div>
  )
}

export default AccueilNav