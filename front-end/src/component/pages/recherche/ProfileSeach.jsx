import React from 'react';
import "../../css/connectePageCss/rechercheCss/ProfileSeach.css";
import StarRatings from '../connectPages/ParticulierConnect/StarRatings';

function ProfileSeach() {
  return (
    <>
        <div className="ProfilSeach">
            <div className="containerProfileSeach">
                <div className="seachTitle">
                    <h3>Resultats recherche:</h3>
                </div>
                <div className="barSeach">
                    <div className="profileUser">
                        <div className="ProfileSeachImg">
                            <img src={require("../../images/imagesArtisan.jpg")} alt="icon BIA" />
                        </div>
                        <div className="profileSeachTitle">
                            <div className="titleUser">
                                <h3>Argence troglodyte mignon</h3>
                            </div>
                            <div className="workDetails">
                            <div className="workNameUser">
                                <p>Electricien bâtiments</p>
                            </div>
                            <div className="locationUser">
                                <p>Abidjan-cocody</p>
                            </div>
                            <div className="pourcentag">
                                <StarRatings />
                            </div>
                                
                        </div>
                        </div>
                    </div>
                    <div className="ProfileBtn">
                        <button>Contacter</button>
                    </div>
                </div>
                <div className="barSeach">
                    <div className="profileUser">
                        <div className="ProfileSeachImg">
                            <img src={require("../../images/imagesArtisan.jpg")} alt="icon BIA" />
                        </div>
                        <div className="profileSeachTitle">
                            <div className="titleUser">
                                <h3>Argence troglodyte mignon</h3>
                            </div>
                            <div className="workDetails">
                            <div className="workNameUser">
                                <p>Electricien bâtiments</p>
                            </div>
                            <div className="locationUser">
                                <p>Abidjan-cocody</p>
                            </div>
                            <div className="pourcentag">
                                <StarRatings />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="ProfileBtn">
                        <button>Contacter</button>
                    </div>
                </div>
                <div className="barSeach">
                    <div className="profileUser">
                        <div className="ProfileSeachImg">
                            <img src={require("../../images/imagesArtisan.jpg")} alt="icon BIA" />
                        </div>
                        <div className="profileSeachTitle">
                            <div className="titleUser">
                                <h3>Argence troglodyte mignon</h3>
                            </div>
                            <div className="workDetails">
                            <div className="workNameUser">
                                <p>Electricien bâtiments</p>
                            </div>
                            <div className="locationUser">
                                <p>Abidjan-cocody</p>
                            </div>
                            <div className="pourcentag">
                                <StarRatings />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="ProfileBtn">
                        <button>Contacter</button>
                    </div>
                </div>
                
            </div>
            





            {/* <div className="containerProfil">
                <div className="containerProfilSeach">
                    <div className="pictureProfile">
                        
                    </div>
                    <div className="profileInfo">
                        
                        
                    </div>
                    <div className="profileLink">
                        <div className='iconNav'> <AiFillFacebook /> </div>
                        <div className='iconNav'> <AiFillYoutube /> </div>
                        <div className='iconNav'> <FaInstagramSquare /> </div>
                        <div className='iconNav'> <AiFillLinkedin /> </div>
                        <div className='iconNav'> <AiFillTwitterSquare /> </div>
                    </div>
                </div>
            </div> */}

        </div>
    </>
  )
}

export default ProfileSeach