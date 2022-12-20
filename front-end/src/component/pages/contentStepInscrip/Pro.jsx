import React, { useState } from 'react';
import '../../css/inscripStep2/Pro.css';
import {Link} from 'react-router-dom'



function Pro() {
    const [userState, setUserState] = useState('');
    console.log(userState)

  return (
    <div className='containerInscri'>
        <div className="contenSuiteInsPro">
            <div className="boxContent">
                <div className="headerContent">
                    <div className="title">
                        <h3>Suite inscription - professionnel</h3>
                    </div>
                    <div className="toggol">
                        <h3>X</h3>
                    </div>
                </div>
            </div>
            <div className="bodyContent">
                <form action="">
                    <div className="input-social">
                        <h4>Raison sociale</h4>
                        <input onChange={(e)=>{
                            const selectUser = e.target.value;
                            setUserState (selectUser) ;
                        }}>
                            
                        </input>
                    </div>
                    <div className="input-social">
                        <h4>Adresse</h4>
                        <input onChange={(e)=>{
                            const selectUser = e.target.value;
                            setUserState (selectUser) ;
                        }}>
                            
                        </input>
                    </div>
                    <div className="content-loc">
                        <div className="inputLoc">
                            <h4>Ville</h4>
                            <select onChange={(e)=>{
                                const selectUser = e.target.value;
                                setUserState (selectUser) ;
                            }}>
                                <option placeholder='Select something'></option>
                                <option value="artisan">Abidjan</option>
                                <option value="pro">Man</option>
                            </select>
                        </div>
                        <div className="inputLoc">
                            <h4>commune</h4>
                            <select onChange={(e)=>{
                                const selectUser = e.target.value;
                                setUserState (selectUser) ;
                            }}>
                                <option placeholder='Select something'></option>
                                <option value="artisan">Cocody</option>
                                <option value="pro">Yopougon</option>
                            </select>
                        </div>

                    </div>
                    <div className="contentInfo">
                      <div className="content-loc">
                          <div className="inputLoc">
                              <h4>Téléphone-pro</h4>
                              <input onChange={(e)=>{
                                  const selectUser = e.target.value;
                                  setUserState (selectUser) ;
                              }}>
                                
                              </input>
                          </div>
                          <div className="inputLoc">
                              <h4>Email-pro</h4>
                              <input onChange={(e)=>{
                                  const selectUser = e.target.value;
                                  setUserState (selectUser) ;
                              }}>
                                
                              </input>
                          </div>
                          

                      </div>
                      <div className="content-loc">
                          <div className="inputLoc">
                              <h4>Numéro RCCM</h4>
                              <input onChange={(e)=>{
                                  const selectUser = e.target.value;
                                  setUserState (selectUser) ;
                              }}>
                                
                              </input>
                          </div>
                          <div className="inputLoc">
                              <h4>Numéro CC</h4>
                              <input onChange={(e)=>{
                                  const selectUser = e.target.value;
                                  setUserState (selectUser) ;
                              }}>
                                
                              </input>
                          </div>
                          

                      </div>
                        <div className="inputInfo">
                            <h4>Activité principale</h4>
                            <select onChange={(e)=>{
                                const selectUser = e.target.value;
                                setUserState (selectUser) ;
                            }}>
                                <option placeholder='Select something'></option>
                                <option value="artisan">Oui</option>
                                <option value="pro">Non</option>
                            </select>
                        </div>

                    </div>
                    <div className="footerContent">
                        <div className="btnSubmit">
                            <Link to="/pageGps"><button type="submit">Etape suivante</button></Link>
                        </div>
                        <div className="btnRetour">
                            <Link to="/profil"><p>Précédent</p></Link>
                        </div>
                        
                        
                    </div>
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default Pro