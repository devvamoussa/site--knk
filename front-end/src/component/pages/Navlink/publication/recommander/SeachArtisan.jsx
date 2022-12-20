import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import "../../../../css/NavLinkcss/PublicationCss/SeachArtisan.css"


function SeachArtisan() {
  return (
    <>
        <div className="ArtisanSeach">
            <div className="containerProfileSeach">
                <div className="seachTitleArtisan">
                    <p>Artisans recommandés</p>
                </div>
                <div className="barSeach">
                    <div className="profileUser">
                        <div className="ProfileSeachImg">
                            <img src={require("../../../../images/imagesArtisan.jpg")} alt="icon BIA" />
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
                                <i className='pourcentageIcone'>< AiFillStar/></i>
                                <i className='pourcentageIcone'><AiFillStar/></i>
                                <i className='pourcentageIcone'><AiFillStar/></i>
                                <i><AiFillStar/></i>
                                <i><AiFillStar/></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="SeachBtn">
                        <button>Envoyer une demande</button>
                    </div>
                </div>
                <div className="barSeach">
                    <div className="profileUser">
                        <div className="ProfileSeachImg">
                            <img src={require("../../../../images/imagesArtisan.jpg")} alt="icon BIA" />
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
                                <i className='pourcentageIcone'>< AiFillStar/></i>
                                <i className='pourcentageIcone'><AiFillStar/></i>
                                <i className='pourcentageIcone'><AiFillStar/></i>
                                <i><AiFillStar/></i>
                                <i><AiFillStar/></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="SeachBtn">
                        <button>Envoyer une demande</button>
                    </div>
                </div>
                <div className="barSeach">
                    <div className="profileUser">
                        <div className="ProfileSeachImg">
                            <img src={require("../../../../images/imagesArtisan.jpg")} alt="icon BIA" />
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
                                <i className='pourcentageIcone'>< AiFillStar/></i>
                                <i className='pourcentageIcone'><AiFillStar/></i>
                                <i className='pourcentageIcone'><AiFillStar/></i>
                                <i><AiFillStar/></i>
                                <i><AiFillStar/></i>
                            </div>
                        </div>
                        </div>
                    </div>
                     <div className="SeachBtn">
                        <button>Envoyer une demande</button>
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

export default SeachArtisan