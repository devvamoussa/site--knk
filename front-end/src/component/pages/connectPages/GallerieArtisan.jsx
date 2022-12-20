import React, { useState } from 'react';
import "../../css/inscripStep2/AddPicture.css";
import { ImCross } from 'react-icons/im';
import "../../css/connectePageCss/GallerieArtisan.css"

export default function GallerieArtisan() {
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [toggles, setToggles] = useState(false);


  return (
    <>
        <div className="GalerieContent">
            <div className="titleGallerie">
                <h2>Gallerie</h2>
            </div>
            <div className="contentCard">
                <div className="cardIterm1">
                    <div>
                         {selectedImage2 && (
                                <div className='btnDelectContentGal'>
                                    <div className="imgCardGalerie">
                                        <img src={URL.createObjectURL(selectedImage2)}  alt="addPost" />
                                    </div>
                                    <div className='btnDelectPicture'>
                                        <button  onClick={()=> setSelectedImage2(null)
                                        }><ImCross/></button>
                                    </div>
                                </div>
                                
                                
                            )}
                        
                        <div className={ toggles? "displayNones" : " boxContentGaleri"}>

                            <div className="card-iterm2">
                                <div>
                                    <div className="AddPictGalerie">
                                        <h4> Déposez votre image ici ou </h4> 
                                        <div className="inputFileGalerie">
                                            <div >
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
                                                    
                                            </div>
                                            <div className="spancontentGalerie">
                                                <span>Parcourir</span>
                                            </div>
                                            
                                            
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="typeImg">
                                        <p>JPG, JPEG, PNG</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                
                </div>
                <div className="cardIterm2"></div>
                <div className="cardIterm2"></div>
            </div>
            <div className="contentCard">
                <div className="cardIterm2"></div>
                <div className="cardIterm2"></div>
                <div className="cardIterm2"></div>
            </div>
            

        </div>
    </>
  )
}
