import '../../../css/connectePageCss/Information.css'
// import { AiFillStar } from 'react-icons/ai';
import { BsChatRightText } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import "../../../css/connectePageCss/ConnectParticulierCss/InfoParticulier.css";
import React from 'react';
import StarRatings from './StarRatings';
// import React from 'react';


const colors = {
    orange : "#FFA500",
    grey : "#a9a9a9"
}


export default function Information() {

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0)
    const [hoverValue, setHoverValue] = React.useState(undefined)

    const handleClick = value =>{
        setCurrentValue(value)
    }

    const handleMouseOver = value =>{
        setHoverValue(value)

    }

    const handelMouseLeave = () =>{
        setHoverValue(undefined)
    }
    // console.log(handleMouseOver, handelMouseLeave,handleClick)


  return (
    <>  
        <div className="containerHomeDetail">
            <div className="HomeLocalisation">
                <div className="boxitermLeft">
                    <div className="pictureHome">
                        <img src={require("../../../images/home2.jpg")} alt="icon BIA" />
                    </div>
                </div>
                <div className='boxItermRigth' >
                    <div className="nameLocalisation">
                        <h3>VILLA 7 A ABIDJAN COCODY PIECES RUE KNK</h3>
                    </div>
                    <div className="infoTexte">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
                            vniam quos soluta laborum exercitationem eaque aborum exercitationem eaque
                            a laudantium harum a.voluptatemantium harumutem harum a.voluptatemantium harumutem 
                            autemsequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum autem</p>
                    </div>

                    <div className="itermRigthInfo">
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
                            <div className="itermDetailsLoc">
                                <button>Suivre</button>
                            </div>

                        </div>
                    </div>
                </div>
                                
            </div>

            {/* ***********************************************iterm--2************************************************** */}

            <div className="HomeLocalisation2">
                <div className="boxitermLeft">
                    <div className="pictureHome">
                        <img src={require("../../../images/home2.jpg")} alt="icon BIA" />
                    </div>
                </div>
                <div className='boxItermRigth' >
                    <div className="nameLocalisation2">
                        <h3>VILLA 7 A ABIDJAN COCODY PIECES RUE KNK</h3>
                    </div>
                    <div className="infoTexte">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
                            vniam quos soluta laborum exercitationem eaque aborum exercitationem eaque
                            a laudantium harum a.voluptatemantium harumutem harum a.voluptatemantium harumutem 
                            autemsequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum autem</p>
                    </div>

                    <div className="itermRigthInfo">
                        <div className="starInfo">
                            <div className="pourcentage">
                               <StarRatings />
                            </div>
                        </div>
                        <div className="itermInpression">
                            <div className="itermTime2">
                                <p>Il y'a une 1 heure</p>
                            </div>
                            <div className="itermLike2">
                                <i><BsChatRightText/></i>
                                <p>63</p> 
                            </div>
                            <div className="itermDetailsLoc2">
                                <button>Suivre</button>
                            </div>

                        </div>
                    </div>
                </div>
                                
            </div>

            {/* ***********************************************iterm--3************************************************** */}

            <div className="HomeLocalisation2">
                <div className="boxitermLeft">
                    <div className="pictureHomeIterm-3">
                        <img src={require("../../../images/home2.jpg")} alt="icon BIA" />
                    </div>
                </div>
                <div className='boxItermRigth' >
                    <div className="NavLocationDetails">
                        <div className="Nav-iterm1">
                            <p>Sponsorisée</p>
                        </div>
                        <div className="Nav--iterm2">
                            <p>Vente</p>
                        </div>
                        <div className="Nav--iterm3">
                            <p>12h:45min:25s</p>
                        </div>
                    </div>
                    <div className="nameLocalisation3">
                        <h3>VILLA 7 A ABIDJAN COCODY PIECES RUE KNK</h3>
                    </div>
                    <div className="PriceHome">
                        <p>Prix : <span>27.000.000Fcfa </span></p>
                    </div>
                    <div className="LieuxHome">
                        <p>Lieux : <span>Abobo SOGEFIA non loins de cite universitaire</span></p>
                    </div>
                    <div className="DescriptionHomeTitle">
                        <p>Description :</p>
                    </div>
                    <div className="DescriptionHome">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenmutem harum a.voluptatemantium harumutem 
                            autemsequiium harum autem</p>
                    </div>

                    <div className="contentHome-picture">
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home2.jpg")} alt="icon BIA" />
                        </div>
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home1.jpg")} alt="icon BIA" />
                        </div>
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home3.jpg")} alt="icon BIA" />
                        </div>
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home4.jpg")} alt="icon BIA" />
                        </div>
                    </div>
                </div>
                                
            </div>
        </div>
        <div className="containerHomeDetail">
            <div className="HomeLocalisation">
                <div className="boxitermLeft">
                    <div className="pictureHome">
                        <img src={require("../../../images/home1.jpg")} alt="icon BIA" />
                    </div>
                </div>
                <div className='boxItermRigth' >
                    <div className="nameLocalisation">
                        <h3>VILLA 7 A ABIDJAN COCODY PIECES RUE KNK</h3>
                    </div>
                    <div className="infoTexte">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
                            vniam quos soluta laborum exercitationem eaque aborum exercitationem eaque
                            a laudantium harum a.voluptatemantium harumutem harum a.voluptatemantium harumutem 
                            autemsequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum autem</p>
                    </div>

                    <div className="itermRigthInfo">
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
                            <div className="itermDetailsLoc">
                                <button>Suivre</button>
                            </div>

                        </div>
                    </div>
                </div>
                                
            </div>

            {/* ***********************************************iterm--2************************************************** */}

            <div className="HomeLocalisation2">
                <div className="boxitermLeft">
                    <div className="pictureHome">
                        <img src={require("../../../images/home4.jpg")} alt="icon BIA" />
                    </div>
                </div>
                <div className='boxItermRigth' >
                    <div className="nameLocalisation2">
                        <h3>VILLA 7 A ABIDJAN COCODY PIECES RUE KNK</h3>
                    </div>
                    <div className="infoTexte">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenda 
                            vniam quos soluta laborum exercitationem eaque aborum exercitationem eaque
                            a laudantium harum a.voluptatemantium harumutem harum a.voluptatemantium harumutem 
                            autemsequi omnis veniam quos soluta laborum exercitationem eaque a laudantium harum autem</p>
                    </div>

                    <div className="itermRigthInfo">
                        <div className="starInfo">
                            <div className="pourcentage">
                                {stars.map((_, index)=>{
                                    return(
                                        <FaStar key={index}
                                         style={{
                                            cursor: "pointer"
                                         }}
                                        
                                         color= {(hoverValue || currentValue) > index ? colors.orange : colors.grey }
                                         onClick={() => handleClick(index + 1)}
                                         onMouseOver={()=> handleMouseOver(index + 1)}
                                         onMouseLeave={()=> handelMouseLeave(index + 1)}
                                         
                                        />
                                    )
                                })}
                                
                            </div>
                        </div>
                        <div className="itermInpression">
                            <div className="itermTime2">
                                <p>Il y'a une 1 heure</p>
                            </div>
                            <div className="itermLike2">
                                <i><BsChatRightText/></i>
                                <p>63</p> 
                            </div>
                            <div className="itermDetailsLoc2">
                                <button>Suivre</button>
                            </div>

                        </div>
                    </div>
                </div>
                                
            </div>

            {/* ***********************************************iterm--3************************************************** */}

            <div className="HomeLocalisation2">
                <div className="boxitermLeft">
                    <div className="pictureHomeIterm-3">
                        <img src={require("../../../images/home3.jpg")} alt="icon BIA" />
                    </div>
                </div>
                <div className='boxItermRigth' >
                    <div className="NavLocationDetails">
                        <div className="Nav-iterm1">
                            <p>Sponsorisée</p>
                        </div>
                        <div className="Nav--iterm2">
                            <p>Vente</p>
                        </div>
                        <div className="Nav--iterm3">
                            <p>12h:45min:25s</p>
                        </div>
                    </div>
                    <div className="nameLocalisation3">
                        <h3>VILLA 7 A ABIDJAN COCODY PIECES RUE KNK</h3>
                    </div>
                    <div className="PriceHome">
                        <p>Prix : <span>27.000.000Fcfa </span></p>
                    </div>
                    <div className="LieuxHome">
                        <p>Lieux : <span>Abobo SOGEFIA non loins de cite universitaire</span></p>
                    </div>
                    <div className="DescriptionHomeTitle">
                        <p>Description :</p>
                    </div>
                    <div className="DescriptionHome">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id ducimus magni assumenmutem harum a.voluptatemantium harumutem 
                            autemsequiium harum autem</p>
                    </div>

                    <div className="contentHome-picture">
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home2.jpg")} alt="icon BIA" />
                        </div>
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home1.jpg")} alt="icon BIA" />
                        </div>
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home3.jpg")} alt="icon BIA" />
                        </div>
                        <div className="itermHome-picture1">
                            <img src={require("../../../images/home4.jpg")} alt="icon BIA" />
                        </div>
                    </div>
                </div>
                                
            </div>
        </div>
     
    </>
  )
}
