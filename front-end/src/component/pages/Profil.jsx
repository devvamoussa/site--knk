import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import "../css/Profil.css"

function Profil() {
    
    const [userState, setUserState] = useState('');
    console.log(userState)   

    //deconnexion avec google
    const LogoutG= ()=>{
        window.open("http://localhost:4000/auth/logout", "_self");
    }
  return (
    <div>
        <div className= "overlays" id="">
            <div className="verifContent">
                <div className="verifGlobal">
                    <div className="contentMarge">
                        <div className="titleVerif">
                            <h2>Suite inscription</h2>
                        </div>
                        <div className="VerifInfo">
                            <p>Merci de choisir le type de compte vous souhaitez créer, pour bénéficier pleinement de nos services ciblés.</p>
                        </div>
                        <div className="boxCode">
                            <div>
                                <h2>TYPE DE COMPTE:</h2>
                            </div>
                            <div className="contentCod">
                            <form>
                                
                                <select onChange={(e)=>{
                                    const selectUser = e.target.value;
                                    setUserState (selectUser) ;
                                }}>
                                    <option value="artisan"></option>
                                    <option value="artisan">ARTISAN</option>
                                    <option value="pro">PROFESSIONNEL</option>
                                     <option value="particulier">PARTICULIER</option>
                                </select>
                                    
                            </form>
                            </div>
                            
                        </div>
                    </div>
                    <div className='contentfooter'>
                        <div className="boxMargfooter">
                            <div className="boxRenv">
                                
                            </div>
                            <div className="btnContent">
                                <div className="btnConti">
                                    <Link to={`/profil/${userState}`} ><button > Continuer</button> </Link>
                                </div>
                                
                                <div className="btnAnnul">
                                <button onClick={LogoutG}>Annuler</button>
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

export default Profil