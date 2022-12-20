import React from 'react';
import '../../../css/connectePageCss/Information.css'
import "../../../css/connectePageCss/connectProCss/CardLocation.css"
import { BsChatRightText } from 'react-icons/bs';
import { AiOutlineEllipsis } from 'react-icons/ai';
import StarRatings from '../ParticulierConnect/StarRatings';

export default function CardLocation() {
  return (
    <>
       <div className="descriptionProfile">
              <div className="boxDisplayInfo">
                <div className="infoTitle">
                    <div className="imgInfo">
                        <img src={require("../../../images/téléchargement.png")} alt="" />
                    </div>
                  <h3>KNK TechnoMedia Group</h3>
                </div>
                <div className="btnInfo">
                  <button>Location</button>
                </div>
                <div className="LinkVillaLoc">
                  <p>Villa</p>
                </div>
                <div className="LinkLieuLoc">
                  <p>Cocody</p>
                </div>
                <div className="iconPlusInfo">
                    <AiOutlineEllipsis />
                </div>
                </div>
                <div className="nameInfo">
                    <h3>HMMGROULLE GYRIN</h3>
                </div>
                <div className="infoTexte">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
                        voluptatem obcaecati ut dolorum libero distinctio error! Asperiores cum necessitatibus nemo, 
                        deserunt, doloribus mollitia velit sequi omnis veniam quos soluta laborum exercitationem eaque
                        a laudantium harum autem.voluptatemantium harum 
                        autemsequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum autem</p>
                </div>
                <div className="cardHomeLocation">
                    <div className="itermHome">
                        <img src={require("../../../images/home1.jpg")} alt="" />
                    </div>
                    <div className="itermHome">
                        <img src={require("../../../images/home2.jpg")} alt="" />
                    </div>
                    <div className="itermHome">
                        <img src={require("../../../images/home1.jpg")} alt="" />
                    </div>
                    <div className="itermHome">
                        <img src={require("../../../images/home4.jpg")} alt="" />
                    </div>
                </div>
                <div className="footerInfo">
                    <div className="starInfo">
                        <div className="pourcentage">
                             <StarRatings />
                        </div>
                    </div>
                           
                    <div className="itermInpression">
                        <div className="itermTimeLoc">
                            <p>Il y'a une 1 heure</p>
                        </div>
                        <div className="itermLike"><i><BsChatRightText/></i> 63</div>
                        <div className="itermDetailsLoc">
                            <button>Voir les details</button>
                        </div>

                    </div>
                </div>
            
        </div>
        <div className="descriptionProfile">
              <div className="boxDisplayInfo">
                <div className="infoTitle">
                    <div className="imgInfo">
                        <img src={require("../../../images/téléchargement.png")} alt="" />
                    </div>
                  <h3>KNK TechnoMedia Group</h3>
                </div>
                <div className="btnInfoLoc">
                  <button>Location</button>
                </div>
                <div className="LinkVillaLoc">
                  <p>Villa</p>
                </div>
                <div className="LinkLieuLoc">
                  <p>Cocody</p>
                </div>
                <div className="iconPlusInfo">
                    <AiOutlineEllipsis />
                </div>
                </div>
                <div className="nameInfo">
                    <h3>HMMGROULLE GYRIN</h3>
                </div>
                <div className="infoTexte">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
                        voluptatem obcaecati ut dolorum libero distinctio error! Asperiores cum necessitatibus nemo, 
                        deserunt, doloribus mollitia velit sequi omnis veniam quos soluta laborum exercitationem eaque
                        a laudantium harum autem.voluptatemantium harum 
                        autemsequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum autem</p>
                </div>
                <div className="cardHomeLocation">
                    <div className="itermHome">
                        <img src={require("../../../images/home3.jpg")} alt="" />
                    </div>
                    <div className="itermHome">
                        <img src={require("../../../images/home4.jpg")} alt="" />
                    </div>
                    <div className="itermHome">
                        <img src={require("../../../images/home3.jpg")} alt="" />
                    </div>
                    <div className="itermHome">
                        <img src={require("../../../images/home2.jpg")} alt="" />
                    </div>
                </div>
                <div className="footerInfo">
                    <div className="starInfo">
                        <div className="pourcentage">
                            <StarRatings />
                        </div>
                    </div>
                    <div className="itermInpression">
                        <div className="itermTimeLoc">
                            <p>Il y'a une 1 heure</p>
                        </div>
                        <div className="itermLike"><i><BsChatRightText/></i> 63</div>
                        <div className="itermDetailsLoc">
                            <button>Voir les details</button>
                        </div>

                    </div>
                </div>
            
        </div>
       

    </>
  )
}
