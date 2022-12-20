import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "../css/Verification.css";
import {logout, reset} from '../../Redux/auth/authSlice'


function Verification() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = (e) =>{
        e.preventDefault();
        dispatch(logout(), reset());
        navigate('/');
        
    }
    

  return (
    <div>
        <div className= "overlays" id="">
            <div className="contentBagroubd">
                <div className="verifContent">
                    <div className="verifGlobal">
                        <div className="contentMarge">
                            <div className="titleVerif">
                                <h2>Entre votre code de sécurité</h2>
                            </div>
                                <div className="VerifInfo">
                                    <p>Merci de vérifier dans vos e-mails ou SMS que vous avez reçu un message avec votre code. <br />
                                    Celui est composé de 6 chiffres et commence par "BIA-".</p>
                                </div>
                                <div className="recepCode">
                                     <h5>Nous avons envoyé votre code à: </h5><i> {user && user.email} ou {user && user.number}</i>   
                                </div>
                                <div className="boxCode">
                                    <div>
                                        <h2>BIA-</h2>
                                    </div>
                                    <div className="contentCode">
                                        <input type="number" placeholder='Entrez les 6 chiffres'/>
                                    </div>
                                    
                                </div>
                            </div> 
                            <div className='contentfooter'>
                                <div className="boxMargfooter">
                                    <div className="boxRenv">
                                        <p>Renvoyer le code</p>
                                    </div>
                                    <div className="btnContent">
                                        <div className="btnConti">
                                            <Link to="/profil"><button > Continuer</button> </Link>
                                        </div>
                                        <div className="btnAnnul">
                                            <button onClick={onLogout}>Annuler</button>
                                        </div>
                                    </div>
                                </div>   
                                
                            </div>
                        </div>
                    
                    </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default Verification