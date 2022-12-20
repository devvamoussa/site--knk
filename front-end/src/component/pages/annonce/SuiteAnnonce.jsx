import { TiDeleteOutline } from 'react-icons/ti';
import '../../css/annonceCss/AnnonceBody.css'
import '../../css/annonceCss/SuiteAnnonce.css'
// import { useState } from 'react';

function SuiteAnnoce({toggleState,setToggleState,toggle, setToggle}) {
    // const [toggles, setToggles] = useState(false);

  return (
    <>
    <div className={ toggle?  "Contentshow" : "overlay" }>

            <div className="show">
                <div className='displayNone'>

                    <div className="contentAnnonce">
                        <div className="BoxtitleInscrip">
                            <div className="boxTitle">
                                <h2>Crée une annonce</h2>
                            </div>
                            <div className="iconeFerm">
                                <i onClick={(e) => setToggle(!toggle)}><TiDeleteOutline/></i>
                            </div>
                            
                            
                        </div>
                        <div className="annoce-detail">
                            <div className="content-detail-rigth">
                                <div className="form-annonce">
                                  <div className="descriAnnonce">
                                    <p>Description *</p>
                                    
                                    <textarea id="subject" name="subject" placeholder="Données plus de details.." ></textarea>
                                  </div>
                                  <div className="mapAnnonce">
                                    <div className="titleGps">
                                      <p>Coordonées GPS</p>
                                    </div>
                                    <iframe title="This is a unique title" style={{width:"100%", height:"16rem", borderRadius:".2rem"}} id="gmap_canvas" src="https://maps.google.com/maps?q=abidjan%20KNK&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                  </div>
                                
                                </div>
                            </div>
                            <div className="content-detail-left">
                              <div className="regle-annoce">
                                <p>Règles pour publier votre annoce</p>
                              </div>
                              <div className="regle-annoce-iterm">
                                <p>Ne vendez pas d'objets ou de services illégaux </p>
                              </div>
                              <div className="regle-annoce-iterm">
                                <p>Ne publiez pas la même annonce plusieurs fois</p>
                              </div>
                              <div className="regle-annoce-iterm">
                                <p>Veillez à ce que vos images soit claire</p>
                              </div>

                              <div className="infoGps">
                                <p>les coordonnées GPS permettent à votre annonce d'être bien référencé</p>
                              </div>
                            </div> 
                             
                        </div>
                        <div className="iterm--footer">
                          <div className="btn-annonce-submit">
                            <button>Créer votre annonce</button>
                          </div>
                          <div className="link-iterm-1">
                            <p>Lire les conditions</p>
                          </div>
                          <div className="link-iterm-1">
                            <p onClick={(e) => setToggleState(!toggleState)}>Précédent</p>
                          </div>
                          <div className="link-iterm-1">
                            <p onClick={(e) => setToggle(!toggle)}>Annuler</p>
                          </div>
                        </div>           
                        <div className="ConditGeneral">
                          <p>En déposant votre annoce, vous acceptez les <span>Condition d'utilisation </span>
                          et la <span>Politique de confidentialité.</span> <br />
                          <span>*Champs obligatoire</span></p>
                        </div>
                        
                    </div>
                  
                </div>
            
            </div>
                
        </div>
      </>
  )
}
export default SuiteAnnoce