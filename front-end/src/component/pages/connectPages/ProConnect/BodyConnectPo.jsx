import React, { useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import '../../../css/connectePageCss/BodyConnect.css';
import "../../../css/connectePageCss/connectProCss/BodyConnectPro.css"
import BodyContentLeft from '../../connectPages/BodyContentLeft';
import Information from '../../connectPages/Information';
import CardLocation from './CardLocation';
// import { Link } from 'react-router-dom';
// import Inscription from '../../../content/Inscription';
import Annonce from '../../annonce/Annonce';
import StarRatings from '../ParticulierConnect/StarRatings';

export default function BodyConnectPo() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
        <div className="containerConnect">
          <div className="itermLeft">
            <div className="containerProfilePro ">
              <div className="pictureProfile">
                <img src={require("../../../images/imagesArtisan.jpg")} alt="icon BIA" />
              </div>
              <div className="profileInfo">
                <div className="titleArgence">
                  <h2>Argence troglodyte mignon</h2>
                </div>
                <div className="workDetails">
                  <div className="workName">
                    <p>Agence immobilière</p>
                  </div>
                  <div className="pourcentage">
                    <StarRatings />
                  </div>
                    
                </div>
                <div className="contentAbonnee">
                    <div className="Publi">
                       <p>xxx Publication</p> 
                    </div>
                    <div className="abonnee">
                        <p>xxx Abonnée</p>
                    </div>
                </div>
                <div className="btnProfilePro">
                  <div className='btn1-iterm'><button>Modifier le profile</button></div>
                  <div className='btn2-iterm'><button onClick={(e) => setToggle(!toggle)}>Créer une annonce </button></div>
                  <div className='btn3-iterm'><button>Promouvoir</button></div>
                  {/* <Link className='linkClass' to="/annonce"></Link> */}
                </div>
              </div>
              <div className="profileLinkPo">
                <div>
                    <div className="cardMap">   
                        <iframe title="This is a unique title" style={{width:"100%", height:"100%", borderRadius:"1rem"}} id="gmap_canvas" src="https://maps.google.com/maps?q=abidjan%20KNK&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                       
                    </div>
                    <div className="profileLinkPro">
                        <div className='iconNav'> <AiFillFacebook /> </div>
                        <div className='iconNav'> <AiFillYoutube /> </div>
                        <div className='iconNav'> <FaInstagramSquare /> </div>
                        <div className='iconNav'> <AiFillLinkedin /> </div>
                        <div className='iconNav'> <AiFillTwitterSquare /> </div>
                    </div>
                </div>


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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
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
              <CardLocation/>
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

        <div className={ toggle ? "ContentShow": "overlay"} id="overlay">
                <Annonce setToggle={setToggle} toggle={toggle} />
        </div>
    </div>
  )
}
