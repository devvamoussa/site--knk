import React, { useState } from 'react';
import "../../css/connectePageCss/rechercheCss/Recherche.css"
import ProfileSeach from './ProfileSeach';

export default function BodyRecherche() {
     const [userState, setUserState] = useState('');
    console.log(userState)   
  return (
    <>
    <div className="containerRecherche">
        <div className="boxContentRcherche">
            <div className="boxMetho">
                <div className="titleSeach">
                    <h1>Recherche avancée</h1>
                </div>
                <div className="MethoSeach">
                    <p>Laissez nous vous guider vers la meilleur offre de bien immobilier.</p>
                    <p>parmi des centaines d'artisans pour vos travaux </p>
                    <p>parmi des centaine de professionnels pour mieux vous renseigner </p>
                </div>
            </div>
            <div className="typeSeach">
                <div className="boxType">
                    <p>un bien immobilier</p>
                </div>
                <div className="boxType">
                    <p>un professionel</p>
                </div>
                <div className="boxType">
                    <p>un artisan</p>
                </div>
            </div>
            <div className="boxSeachLieu">
                <div className="boxLieu-iterm">
                    <form>
                                
                        <select onChange={(e)=>{
                            const selectUser = e.target.value;
                            setUserState (selectUser) ;
                        }}>
                            <option value="artisan">Métier</option>
                            <option value="artisan">ARTISAN</option>
                            <option value="pro">PROFESSIONNEL</option>
                                <option value="particulier">PARTICULIER</option>
                        </select>
                            
                    </form>
                </div>
                <div className="boxLieu-iterm">
                    <form>
                        
                        <select onChange={(e)=>{
                            const selectUser = e.target.value;
                            setUserState (selectUser) ;
                        }}>
                            <option value="artisan">Ville</option>
                            <option value="artisan">ARTISAN</option>
                            <option value="pro">PROFESSIONNEL</option>
                                <option value="particulier">PARTICULIER</option>
                        </select>
                            
                    </form>
                    
                </div>
                <div className="boxLieu-iterm">
                    <form>
                                
                        <select onChange={(e)=>{
                            const selectUser = e.target.value;
                            setUserState (selectUser) ;
                        }}>
                            <option value="artisan">Commune</option>
                            <option value="artisan">ARTISAN</option>
                            <option value="pro">PROFESSIONNEL</option>
                                <option value="particulier">PARTICULIER</option>
                        </select>
                            
                    </form>
                </div>
                <div className="btnSeach">
                    <button>RECHERCHER</button>
                </div>
            </div>
        </div>

    </div>
        <div>
            <ProfileSeach/>
        </div>
       
    </>
  )
}
