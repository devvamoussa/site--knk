import React, { useState } from 'react';
import "../../css/inscripStep2/AddPicture.css";
import Image  from '../../images/imageAdd.png';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import {Link} from 'react-router-dom'

export default function AddPicture() {
    const NewImage = Image;
    
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);

  return (
    <div>
        <div className='containerAddPict'>
            <div className="contenAddPict">
                <div className="headerContent">
                    <div className="contentAdd">
                        <div className="titleAdd">
                            <h3>Ajoutez une photo</h3>
                        </div> 
                        <div className="boxContentAdd">
                            {selectedImage1 && (
                                <div className='btnDelectContent'>
                                    <div className="imgCard">
                                        <img src={URL.createObjectURL(selectedImage1)}  alt="addPost" />
                                    </div>
                                    <div className='btnDelect'>
                                        <button onClick={()=>setSelectedImage1(null)}><ImCross/></button>
                                    </div>
                                </div>
                                
                                
                            )}

                            
                            <div className="card-iterm2">
                                <div>
                                    <div className="AddPict">
                                        <h4> Déposez votre image ici ou </h4> 
                                        <div className="inputFile">
                                            <div >
                                                <input
                                                    type="file"
                                                    name="myImage"
                                                    placeholder='Parcourir'
                                                    onChange={(event) => {
                                                    console.log(event.target.files[0]);
                                                    setSelectedImage1(event.target.files[0]);
                                                    }}
                                                    />
                                                    
                                            </div>
                                            <div className="spancontent">
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
                <div className="containerPload">
                        <div className="iterm-left">
                            <p>Chargement...</p>
                        <div className="pourcentage">
                            <p><span>35%</span> <span>57s</span> écoulé</p>
                        </div>
                            
                        </div>
                        <div className="iterm-rigth">
                            <p><AiOutlinePauseCircle/></p>
                            <p><ImCross/></p>
                        </div>
                        
                </div> 
                <div className="headerContent">
                    <div className="contentAdd">
                        <div className="titlePiece">
                            <h3>Ajoutez une copie de votre pièce d'identité</h3>
                        </div> 
                        <div className="boxContentAdd">
                            {selectedImage2 && (
                                <div className='btnDelectContent'>
                                    <div className="imgCard">
                                        <img src={URL.createObjectURL(selectedImage2)}  alt="addPost" />
                                    </div>
                                    <div className='btnDelect'>
                                        <button onClick={()=>setSelectedImage2(null)}><ImCross/></button>
                                    </div>
                                </div>
                                
                                
                            )}

                            
                            <div className="card-iterm2">
                                <div>
                                    <div className="AddPict">
                                        <h4> Déposez votre image ici ou </h4> 
                                        <div className="inputFile">
                                            <div >
                                                <input
                                                    type="file"
                                                    name="myImage"
                                                    placeholder='Parcourir'
                                                    onChange={(event) => {
                                                    console.log(event.target.files[0]);
                                                    setSelectedImage2(event.target.files[0]);
                                                    }}
                                                    />
                                                    
                                            </div>
                                            <div className="spancontent">
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
                <div className="containerPload">
                    <div className="iterm-left">
                        <p>Chargement...</p>
                    <div className="pourcentage">
                        <p><span>35%</span> <span>57s</span> écoulé</p>
                    </div>
                        
                    </div>
                    <div className="iterm-rigth">
                        <p><AiOutlinePauseCircle/></p>
                        <p><ImCross/></p>
                    </div>
                    
                </div>
                <div className="footerContentAdd">
                    <div className="btnSubmitAdd">
                        <Link to="/artisanConnect"><button type="submit">Finaliser votre inscription</button></Link>
                    </div>
                    <div className="btnRetourAdd">
                        <Link to="/profil/artisan"><p>Précédent</p></Link>
                        <Link to="/"><p>Annuler</p></Link>
                    </div>
                    
                    
                </div>   
                   
                
            </div>
            
        
        </div>
    </div>
  )
}
