import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import '../../css/connectePageCss/BodyConnect.css'
import GallerieArtisan from './GallerieArtisan';
import Information from './Information';
import BodyContentLeft from './BodyContentLeft';
import StarRatings from './ParticulierConnect/StarRatings';


export default function BodyConnect() {
  return (
    <>
        <div className="containerConnect">
          <div className="itermLeft">
            <div className="containerProfile">
              <div className="pictureProfile">
                <img src={require("../../images/imagesArtisan.jpg")} alt="icon BIA" />
              </div>
              <div className="profileInfo">
                <div className="titleArgence">
                  <h2>Argence troglodyte mignon</h2>
                </div>
                <div className="workDetails">
                  <div className="workName">
                    <p>Electricien bâtiments</p>
                  </div>
                  <div className="pourcentage">
                    <StarRatings />
                  </div>
                    
                </div>
                <div className="btnProfile">
                  <div><button>Modifier profile</button></div>
                  <div><button>Promouvoir</button></div>
                </div>
              </div>
              <div className="profileLink">
                  <div className='iconNav'> <AiFillFacebook /> </div>
                  <div className='iconNav'> <AiFillYoutube /> </div>
                  <div className='iconNav'> <FaInstagramSquare /> </div>
                  <div className='iconNav'> <AiFillLinkedin /> </div>
                  <div className='iconNav'> <AiFillTwitterSquare /> </div>
              </div>
            </div>
            
            <div className="descriptionProfile">
              <div className="boxDisplayDescrip">
                <div className="titleDescription">
                  <h2>Description</h2>
                </div>
                <div className="iconModif">
                  <i><MdModeEditOutline/></i>
                </div>
              </div>
              <div className="descriptionTexte">
                <p>Lorem ipsum  sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
                    voluptatem obcaecati ut dolorum libero distinctio error! Asperiores cum necessitatibus nemo, 
                    deserunt, doloribus mollitia velit sequi omnis veniam quos soluta laborum exercitationem eaque
                    a laudantium harum autem.voluptatem obcaecati ut dolorum libero distinctio error! Asperiores
                   nobcaecati ut dolorum libero distinctio error! Asperiores
                    cum necessitatibus nemo, deserunt, doloribus mollitia velit
                    sequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum 
                    autemsequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum autem</p>
              </div>
            
            
            </div>
            <div className='itermGallerie'>
              <GallerieArtisan/>
            </div>
            <div className="itermInformation">
              <Information/>
            </div>
          </div>

          
          {/* **********************container left************************************ */}
          <div className="itermRigth">
            <BodyContentLeft/>
          </div>
         
            
        </div>
    </>
  )
}
