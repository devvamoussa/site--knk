import "../css/BodyAccueil.css";
import Connexion from './Connexion';

function BodyAccueil() {  
  
  return (
    <div className='contentBody'>
        <div className="contentBody-item">
            <div className="content-left">
                <div className="imgIcon">
                    <img src={require("../images/BIA-icone.jpg")} alt="icon BIA" />
                </div>
                <div className="titleIcone">
                    <h1>LA BOURSE DE L'IMMOBILIER <br /> D'ABIDJAN</h1>
                </div>
                <div className="detail">
                    <p>Rencontrez les professionnels de l'immobilier, <br />

                    Disposez d'informations vérifiées et fiables, <br />

                    Effectuez vos opérations immobilières, <br />
                    
                    Dans les conditions légales.</p>
                </div>
                <div className="plus-detail">
                    <p>EN SAVOIR PLUS...</p>
                </div>
                
            </div>

            <div className="content-rigth">
                <div className="ContentConnexionBox">
                    <div className="inputConnexion">
                        <Connexion />
                    </div>
                </div>
                <div >
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default BodyAccueil