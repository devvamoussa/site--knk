import '../../../css/NavLinkcss/compteInfo/parametre.css'
import { GiSettingsKnobs } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { MdOutlinePayment } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

function ParametreBody() {
    const {user} = useSelector((state) => state.auth)
    console.log(user)

  return (
    <>
        <div className="containerParamet">
            <div className="contentParamet">
                <div className="itermLeftParamet">
                    <div className="titleParamet">
                        <p>Paramètres</p>
                    </div>
                    <div className="parametre-iterm">
                        <div className="iterm-parametre-1">
                            <div className='iconsParametre'><i><GiSettingsKnobs /></i><p>Général </p></div>
                        </div>
                        <div className="iterm-parametre-1">
                            <div className='iconsParametre'><i><GrSecure /> </i><p> Sécurité et connexion </p></div>
                        </div>
                        <div className="iterm-parametre-1">
                            <div className='iconsParametre'><i><MdOutlinePayment /></i><p>Details de payement </p></div>
                        </div>
                        <div className="iterm-parametre-1">
                            <div className='iconsParametre'><i><IoMdNotificationsOutline /></i><p>Paramètre de notification </p></div>
                        </div>
                    </div>
                </div>
                <div className="itermRightParamet">
                    <div className="contentRigthPara">
                        <div className="titleParametRigth">
                            <p>Sécurité et connexion</p>
                        </div>
                        <div className="content-info-profil">
                            <div className="bottomBorder">
                                <div className="NameContent"><p>Nom</p> <p>{user && user.name}</p></div>
                            </div>
                            <div className="bottomBorder">
                                <div className="NameContent"><p>Nom d'utilisateur</p> <p>{user && user.lasName}</p></div>
                            </div>
                            <div className="bottomBorder">
                                <div className="NameContent"><p>Contact</p> <p>{user && user.number}</p></div>
                            </div>
                            <div className="bottomBorder">
                                 <div className="NameContent"><p>Adresse email</p> <p>{user && user.email}</p></div>
                            </div>
                            <div className="bottomBorder">
                                <div className="NameContent"><p>Thème</p> <p>Sombre</p></div>
                            </div>  
                             
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ParametreBody