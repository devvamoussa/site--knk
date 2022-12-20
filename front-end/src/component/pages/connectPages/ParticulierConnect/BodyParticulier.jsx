import React from 'react';
import InfoParticulier from '../ParticulierConnect/InfoParticulier';
import BodyContentLeft from '../BodyContentLeft';
import "../../../css/connectePageCss/ConnectParticulierCss/BodyParticulier.css"


export default function BodyConnect() {
  return (
    <>
        <div className="containerConnect">
            <div className="itermLeft">
                <div className="containerParticulier">
                    <div className="titleAbonne">
                        <p>Vous suivez déjà</p>
                    </div>
                    <div className='pictureContent'>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/imagesArtisan.jpg")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/téléchargement.png")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/imagesArtisan.jpg")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/imagesArtisan.jpg")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/téléchargement.png")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/imagesArtisan.jpg")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/téléchargement.png")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/imagesArtisan.jpg")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                        <div className="profileInfo">
                            <div className="pictureParticulier">
                                <img src={require("../../../images/imagesArtisan.jpg")} alt="icon BIA" />
                            </div>
                            <div className="titlePicture">
                                <p>DEVVAM</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="titleLoc">
                    <div className="publication"><p>Publication récentes</p></div>
                    <div className="trie"><p>Trier vente location</p></div>
                </div>
            
            <div className="itermInformation">
              <InfoParticulier/>
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