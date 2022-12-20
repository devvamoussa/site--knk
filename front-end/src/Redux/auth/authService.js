import axios from 'axios'
//import { useNavigate } from 'react-router-dom';
//import firebase from '../config/firebase';


const API_URL = 'http://localhost:4000/api/users/'


//register user
const register = async (userData) => {
    
    

    const response = await axios.post(API_URL, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    //const navigate = useNavigate()
    //navigate("/verification");
    return response.data
    
}

//login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    //const navigate = useNavigate()
    //navigate("/verification");
    return response.data
   
}

// logout user 
const logout = () =>{
    localStorage.removeItem('user')
}

// authentification from facebook 

//const socialMediaAuth = (provider) =>{
   // firebase.auth().signInWithPopup(provider).then((res)=>{
     //   return res.data
   // }).catch((error) =>{
       // return error
    //})
//};

const authservice = {
    register,
    login,
    logout,
    //socialMediaAuth,
}


export default authservice