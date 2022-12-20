import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../Redux/auth/authSlice';
import "../css/Connexion.css";
import { GrFacebook } from 'react-icons/gr';
import { AiOutlineGoogle } from 'react-icons/ai';
import Inscription from './Inscription';
import Spinner from './Spinner';



function Connexion() {
    // connexion avec google

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [userG, setUser] = useState(null)

    useEffect(() => {
        const getUser = async ()=>{
        fetch("http://localhost:4000/auth/login/success",{
            method: "GET",
            credentials: 'include',
            headers: {
            Accept: "application/json",
            "content-Type" : "application/json",
            "Access-control-Allow-Credentials": true,
            },

        }).then((response) =>{
            if (response.status === 200) return response.json();
            throw new Error("authentification effectué")
        }).then(resObject =>{
            setUser(resObject.user)
        }).catch((err)=>{
            console.log(err)
        })
        };
        getUser()

        if(userG){
            navigate('/profil')
            }

            dispatch(reset())

    }, [userG,  navigate, dispatch]);
    console.log(userG)






  const [formData, setFormData] = useState({
        email: '',
        password: '',

    })
    const { password, email } = formData

    const onChange = (e) =>{
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value, 
        }))
    }

    

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(user){
        navigate('/verification')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmitLogin = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password 
        }
        dispatch(login(userData))
    }
    const [toggle, setToggle] = useState(false);
     if(isLoading){
        return <Spinner />
    }
    
    //connexion avec google

    const google = () =>{
        window.open("http://localhost:4000/auth/google", "_self")
    }
    const facebook = () =>{
        window.open("http://localhost:4000/auth/facebook", "_self")
    }

  return (
    <div>
        <div className="contentConnexion">
            <form onSubmit={onSubmitLogin}>
                <div className='inputConnexion1'>
                    <input type="text" name='email' value={email}  placeholder='Numero de téléphone ou e-mail' onChange={onChange}/>
                    <input type="password" name='password' value={password} placeholder='Mot de passe' onChange={onChange}/>
                </div>
            
                <div className="buttonConnexion">
                    <button type='submit'>Connexion</button>
                </div>
            </form>
            <div className="contentOU">
                <div className="traisOU"></div>
                <div className="traisOU"></div>
            </div>
            <div className="ou">
                <p>OU</p>
            </div>
            <div className="contentMethoCoIterm1" onClick={facebook}>
                <div>
                    <i><GrFacebook/></i>
                </div>
                <div className='methoFB'>
                    <p>Se connecter avec Facebook</p>
                </div>
                
            </div>
            <div className="contentMethoCoIterm2" onClick={google}>
                <div>
                    <i><AiOutlineGoogle/></i>
                </div>
                <div className='methoFB'>
                    <p>Se connecter avec Google</p>
                </div>
            </div>
            <div className="motOubli">
                <p>mot de passe oublié?</p>
            </div>
            
        </div>
        <div className="contentFooter">
            <p>Vous n'avez pas de compte? <span onClick={(e) => setToggle(!toggle)}>Inscrivez vous</span></p>
        </div>
        <div className="contentInscription">
            <div className={ toggle ? "ContentShow": "overlay"} id="overlay">
                <Inscription setToggle={setToggle} toggle={toggle} />
            </div>
            
        </div>
    </div>
  )
}

export default Connexion 