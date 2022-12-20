import React, { useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaSearchPlus } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { FiMessageSquare } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdShoppingBag } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import "../../css/connectePageCss/NavConnect.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { logout, reset } from '../../../Redux/auth/authSlice';

export default function NavConnecte() {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const {user} = useSelector((state) => state.auth)

    const onLogout = (e) =>{
        e.preventDefault();
        navigate('/');
        dispatch(logout() && reset());
        
        
    }



  return (
    <>
        <div className="containerNav">
            <div className="card--iterm1">
                <div className="content--term1">
                    <div className="imgIcon--term1">
                        <img src={require("../../images/BIA-icone.jpg")} alt="icon BIA"  />
                        
                    </div>
                    <div className="titleIcone--term1">
                        <h1>LA BOURSE DE L'IMMOBILIER <br /> D'ABIDJAN</h1>
                    </div>
                    
                </div>
            </div>
            <div className="card--iterm-2">
                <div className="formContent--iterm2">
                    <div className="inputIconsContent">
                        <div className="inputContent--iterm2">
                            <form action="">
                                <input type="text" placeholder='Rechercher'/>
                            </form>
                        </div>
                        <div className="contentIcon--iterm2">
                            <i><BsSearch/></i>
                        </div>
                        
                    </div>
                    
                    <div className="iconsInput">
                        <Link to="/recherche"><i><FaSearchPlus/></i></Link>
                        
                    </div>
                </div>
            </div>
            <div className="card--iterm-3">
                <div className="Icons--iterm-3">
                    <Link to="/particulier"><i><ImHome/></i></Link>
                </div>
                <div className="Icons--iterm-3">
                    <Link to="/shats"><i><FiMessageSquare/></i></Link>
                </div>
                <div className="Icons--iterm-3">
                    <Link to="/notification"><i><IoIosNotifications/></i></Link>
                </div>
                    
                <div className="Icons--iterm-3"><i><AiOutlineHeart/></i> </div>
                <div className="Icons--iterm-3Img" onClick={(e) => setToggle(!toggle)}>
                    <img src={require('../../images/imagesArtisan.jpg')} alt="artisanPicture" onClick={(e) => setToggle(!toggle)}/>
                </div>
            </div>
            <div className="card--iterm-4">
                <div className='iconNav'> <AiFillFacebook /> </div>
                <div className='iconNav'> <AiFillYoutube /> </div>
                <div className='iconNav'> <FaInstagramSquare /> </div>
                <div className='iconNav'> <AiFillLinkedin /> </div>
                <div className='iconNav'> <AiFillTwitterSquare /> </div>
            </div>
        </div>

        <div className={toggle?"navToggle" : "overlay" } >   
            <div className='navContainer'>
                <div className='iconeProfile'> <Link className='linkClass' to="/projets"><i><CgProfile/></i> <span> Mes projets</span></Link></div>
                <div className='iconeProfile1'><Link className='linkClass' to="/parametre"><i><CgProfile/></i> <span>Gérer mon compte</span></Link> </div>
                <div className='iconeProfile2'><Link className='linkClass' to="/verification"><i><MdShoppingBag/></i> <span> Changer type de compte</span></Link></div>
                <div className='iconeProfile3' onClick={onLogout}><i><FiLogOut/></i> <span >Déconnexion</span> </div>
            </div>
        </div>
    </>
  )
}
