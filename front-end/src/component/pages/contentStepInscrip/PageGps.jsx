import React, { useState } from 'react';
import "../../css/inscripStep2/AddPicture.css";
import "../../css/inscripStep2/PageGps.css";
import {Link} from 'react-router-dom'

export default function PageGps() {
    const [userState, setUserState] = useState('');
    console.log(userState)

  return (
    <div>
        <div className='containerAddPict'>
            <div className="contenAddPict">
                <div className="headerContent">
                    <div className="contentAdd">
                        <form action="" method="post">
                            <div className="input-Gps">
                            <h3>Coordonnées GPS</h3>
                                <input onChange={(e)=>{
                                    const selectUser = e.target.value;
                                    setUserState (selectUser) ;
                                }}>
                            
                                </input>
                            </div>
                                 
                            <div/>
                        </form>
                        <div className='card-iterm'>
                            <iframe title="This is a unique title" style={{width:"100%", height:"100%", borderRadius:"1rem"}} id="gmap_canvas" src="https://maps.google.com/maps?q=abidjan%20KNK&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                       
                    </div>          
                </div> 
                
                
                <div className="footerContentAdd">
                    <div className="btnSubmitAdd">
                        <Link to="/proConnect"><button type="submit">Finaliser votre inscription</button></Link>
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
