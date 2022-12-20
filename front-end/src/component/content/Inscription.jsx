import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../Redux/auth/authSlice';
//import { BiArrowToBottom } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti';
import "../css/Inscription.css";
import Spinner from './Spinner';
import 'react-phone-number-input/style.css'
//import { Stack, TextField } from '@mui/material';
//import moment from 'moment';
//import PhoneInput from 'react-phone-number-input'
//import { authentication } from './verifPhone'
//import { getAuth, RecaptchaVerifier } from "firebase/auth"



const Inscription =({toggle, setToggle} ) =>{

      const [formData, setFormData] = useState({
        name:'',
        lasName: '',
        email: '',
        password: '',
        password2: '',
        number: '',
        newdate: '',
        genre: '',
       
        
    })
    const {name, lasName, email, password, password2, number, genre,  newdate } = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
    //const [phoneNumber, setPhoneNumber] = useState()
    //const [expandForm, setExpandForm] = useState(false)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess  ||  user){
        navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) =>{
        setFormData((prevState) =>({   
            ...prevState,
            [e.target.name] : e.target.value, 
           
            
            
        }))
        
    }

    //date fonction

    //const onChangeDate = e => {
    //const newdate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
    //setFormData(newdate)
    //console.log(newdate); //value picked from date picker

  //};
    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('pssword do not match')
        } else {
            const userData = {
            name,
            lasName,
            email,
            password,
            password2,
            number,
            newdate,
            genre,
          
            
        }
         dispatch(register(userData))

        }
        
        //if(phoneNumber.length >= 12){
          //  setExpandForm(true);
          //  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
              // 'size': 'invisible',
               //'callback': (response) =>{

               // }
           // }, authentication);
             
       // }
       // dispatch(RecaptchaVerifier()) 
       // PhoneInput defaultCountry='CI'
        
        
    }
  
    if(isLoading){
        return <Spinner />
           
    }
    
  return (
    <div className='boxContentIcrip'>
        <div className={ toggle? "ContentShow" : "overlay"}>

            <div className="show">
                <div className='displayNone'>

                    <div className="contentConnexion">
                        <div className="BoxtitleInscrip">
                            <div className="boxTitle">
                                <h2>S'inscrire</h2>
                                <p>C'est rapide et facile</p>
                            </div>
                            <div className="iconeFerm">
                                <i onClick={(e) => setToggle(!toggle)}><TiDeleteOutline/></i>
                            </div>
                            
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="boxIterm1">
                                <div className="iterm1Input">
                                    <input type="text" id='name' name='name' value={name} placeholder='Nom' onChange={onChange}/>
                                </div>
                                <div className="iterm1Input">
                                    <input  type="text" id='lasName' name='lasName' value={lasName} placeholder='Prenom' onChange={onChange}/>
                                </div>

                            </div>
                            <div className="boxIterm2">
                                <input type="text" id='number' name='number' value={number} placeholder='Numero de téléphone ' onChange={onChange}/>
                                <input type="text" id='email' name='email' value={email} placeholder='e-mail' onChange={onChange}/>
                                <input type="password" id='password' name='password' value={password} placeholder='Mot de passe' onChange={onChange}/>
                                <input type="password" id='password2' name='password2' value={password2} placeholder='veillez confirmée votre mot de passe' onChange={onChange}/>
                            </div>
                            <div className="boxDate">
                                <div className="title">
                                    <p>Date de naissance</p>
                                </div>
                                
                                <div className="dateBox">
                                    <div className="dateBi">
                                        <input className="date"  value={newdate} type="date" name="newdate" id="" onChange={onChange}/>
                                        
                                    </div>
                                    
                                       
                                </div>
                            </div>
                            <div className="boxDate">
                                <div className="title">
                                    <p>Genre</p>
                                </div>
                                <div className="dateGenre">
                                    <div className="date">
                                        <p>Homme</p>
                                        <input type="radio" value="Homme" name="genre" id="Homme" onChange={onChange}/>
                                    </div>
                                    <div className="date">
                                        <p>Femme</p>
                                        <input type="radio" value="Femme" name="genre" id="Femme" onChange={onChange}/>
                                    </div>
                                    <div className="date">
                                        <p>Autre</p>
                                        <input type="radio" value="Autre" name="genre" id="Autre" onChange={onChange}/>
                                    </div>
                                </div> 
                                
                            </div>
                        <div className="consigne">
                            <p>En appuyant sur s'inscrirer, vous acceptez nos <span>conditions générales, </span>
                                notre <span>politique d'utilisation des données, </span> et notre <span>politique d'utilisation des cookies</span> 
                                vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner
                            </p>
                        </div>
                        <div className="btnInscription">
                            <button type='submit'>  S'inscrire </button> 
                        </div>
                    </form>        
                    </div>
                    <div className="contentFooter">
                        <p>Vous avez un compte?<i onClick={(e) => setToggle(!toggle)}><span>Connectez vous</span>  </i></p>
                    </div>
                </div>
            
            </div>
                
        </div>
    </div>
  )

}

export default Inscription;