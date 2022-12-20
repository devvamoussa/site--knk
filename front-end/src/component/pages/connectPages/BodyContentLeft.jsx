import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import "../../css/connectePageCss/BodyContentLeft.css"
import StarRatings from './ParticulierConnect/StarRatings';

export default function BodyContentLeft() {
  return (
    <>
        <div className="contentLeft">
            <div className="containerProfileLeft">
              <div className="pictureProfileLeft ">
                <img src={require("../../images/imagesArtisan.jpg")} alt="icon BIA" />
              </div>
              <div className="profileInfoLeft">
                <div className="titleArgence">
                  <h4>@artisanUnique</h4>
                </div>
                <div className="workDetailsLeft">
                  <div className="workNameLeft">
                    <p>Mason</p>
                  </div>
                  <div className="pourcentage">
                    <StarRatings />
                  </div>
                </div>
            
              </div>
              
            </div>
            <div className="descriptionLeft">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit harum exercitationem quaerat laborum ut mollitia unde 
                    rerum soluta doloribus deserunt.</p>
            </div>
            <div className="btncontentLeft">
                <div className="btnSuivreLeft">
                    <button>Suivre</button>
                </div>
                <div className="detailLeft">
                    <div className="detailIcon">
                        <i><HiOutlineArrowNarrowRight/></i>
                    </div>
                    <div className="tileDetail">
                        <p>Detail</p>
                    </div>
                </div>
                
                
            </div>
        </div>
        <div className="contentLeft--iterm1">
            <div className="containerProfileLeft">
              <div className="pictureProfileLeft ">
                <img src={require("../../images/imageAdd.png")} alt="icon BIA" />
              </div>
              <div className="profileInfoLeft">
                <div className="titleArgence">
                  <h4>@artisanUnique</h4>
                </div>
                <div className="workDetailsLeft">
                  <div className="workNameLeft">
                    <p>Mason</p>
                  </div>
                  <div className="pourcentage">
                    <StarRatings />
                  </div>
                    
                </div>
            
              </div>
              
            </div>
            <div className="descriptionLeft">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit harum exercitationem quaerat laborum ut mollitia unde 
                    rerum soluta doloribus deserunt.</p>
            </div>
            <div className="btncontentLeft">
                <div className="btnSuivreLeft">
                    <button>Suivre</button>
                </div>
                <div className="detailLeft">
                    <div className="detailIcon">
                        <i><HiOutlineArrowNarrowRight/></i>
                    </div>
                    <div className="tileDetail">
                        <p>Detail</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    </>
  )
}
