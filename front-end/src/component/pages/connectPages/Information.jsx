import React from 'react'
import '../../css/connectePageCss/Information.css'
import { BsChatRightText } from 'react-icons/bs';
import { AiOutlineEllipsis } from 'react-icons/ai';
import StarRatings from './ParticulierConnect/StarRatings';

export default function Information() {
  return (
    <>
        <div className="descriptionProfile">
              <div className="boxDisplayInfo">
                <div className="infoTitle">
                    <div className="imgInfo">
                        <img src={require("../../images/téléchargement.png")} alt="" />
                    </div>
                  <h3>KNK TechnoMedia Group</h3>
                </div>
                <div className="btnInfo">
                  <button>Information</button>
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
                <div className="footerInfo">
                    <div className="starInfo">
                        <div className="pourcentage">
                            <StarRatings />
                        </div>
                            
                    </div>
                    <div className="itermInpression">
                        <div className="itermTime">
                            <p>Il y'a une 1 heure</p>
                        </div>
                        <div className="itermLike">
                            <i><BsChatRightText/></i>
                            <p>63</p> 
                        </div>
                        <div className="itermDetails">
                            <button>Suivre</button>
                        </div>

                    </div>
                </div>
            
            </div>
    </>
  )
}
