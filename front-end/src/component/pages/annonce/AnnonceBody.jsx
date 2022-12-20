import { TiDeleteOutline } from 'react-icons/ti';
import '../../css/annonceCss/AnnonceBody.css'
import { AiFillPicture } from 'react-icons/ai';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import SuiteAnnonce from './SuiteAnnonce';

function AnnonceBody({toggle, setToggle}) {
   const [selectedImage2, setSelectedImage2] = useState(null);
    const [toggles, setToggles] = useState(false);
     const [toggleState, setToggleState] = useState (true);
    
 const toggleClick = (e) =>{
    
      setToggleState(!toggleState)
    }
   

    if(toggleState){
      return (
       
    <>
       
    <div className={ toggle? "ContentShow" : "overlay"}>

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
                                  <form action="">
                                    <div className="formVille">
                                      <p>Ville *</p>
                                      <input type="text" />
                                    </div>
                                    <div className="formVille">
                                      <p>Type de bien *</p>
                                      <input type="text" />
                                    </div>
                                    <div className="formVille">
                                      <p>Titre de l'annonce *</p>
                                      <input type="text" />
                                    </div>
                                    <div className="formVille">
                                      <p>Prix *</p>
                                      <input type="text" />
                                    </div>
                                    
                                  </form>
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
                            </div> 
                             
                        </div>
                        <div className="contentImage-Annoce">
                                        <div className="content---img">
                                      <p>Photos / videos</p>
                                      <div className="content-addPicture-iterm">
                                        <div className="picture-annonce">
                                          <i><AiFillPicture /></i>
                                        </div>
                                        <div className='add-annonce'>
                                            <p> Déposez votre image ici ou </p> 
                                            <div className="inputFileAnnonce">
                                                <div className='inputDisplay'>
                                                    <input
                                                        type="file"
                                                        name="myImage"
                                                        placeholder='Parcourir'
                                                        onChange={(event) => {
                                                        console.log(event.target.files[0]);
                                                        setSelectedImage2(event.target.files[0]);
                                                        }}
                                                        onClick={(e) => setToggles(!toggles)}
                                                        />
                                                        {/* <span>Parcourir</span> */}
                                                </div>
                                                <div className="spancontentGalerie">
                                                    <span>Parcourir</span>
                                                </div>
                                                
                                              </div>  
                                              
                                            </div>
                                            
                                      </div>
                                      <div className="typeImgAnonce">
                                          <p>JPG, JPEG, PNG</p>
                                      </div>
                                    </div>
                                    <div className="anonceImage">
                                      <div className="imgAnonce-1">
                                        {selectedImage2 && (
                                            <div className='btnDelectContentGal'>
                                                <div className="img-annoce">
                                                    <img src={URL.createObjectURL(selectedImage2)}  alt="addPost" />
                                                </div>
                                                <div className='btnDelectAnnonce'>
                                                    <button  onClick={()=> setSelectedImage2(null)
                                                    }><ImCross/></button>
                                                </div>
                                            </div>
                                            
                                            
                                        )}
                                      </div>
                                      <div className="imgAnonce-2">
                                        {selectedImage2 && (
                                            <div className='btnDelectContentGal'>
                                                <div className="img-annoce">
                                                    <img src={URL.createObjectURL(selectedImage2)}  alt="addPost" />
                                                </div>
                                                <div className='btnDelectAnnonce'>
                                                    <button  onClick={()=> setSelectedImage2(null)
                                                    }><ImCross/></button>
                                                </div>
                                            </div>
                                            
                                            
                                        )}
                                      </div>
                                    </div>
                                    </div>
                                    <div className="btn-annonce-etape-2">
                                      <button onClick={toggleClick}>Etape suivante</button>
                                    </div> 
                                    
                        
                    </div>
                  
                </div>
            
            </div>
                
        </div>
      </>
      
  )
  }else{
    return(
      <>
        <SuiteAnnonce toggleState={toggleState} setToggleState={setToggleState} setToggle={setToggle} toggle={toggle}/> 
      </>
    )
  }
  
}
export default AnnonceBody