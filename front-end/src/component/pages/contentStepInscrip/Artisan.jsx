import React, { useEffect, useState } from 'react';
import '../../css/inscripStep2/Artisan.css';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {createArtisan} from '../../../Redux/inscriptionStep1/artisanSlice'

//useSelector,

function Artisan() {
    const [metiers, setMetiers] = useState([]);
    const [villes, setVilles] = useState([]);
    const [communes, setCommune] = useState([]);

    //get metiers
    useEffect(()=>{
        const getmetiers = async() =>{
            const resmetiers= await fetch("http://192.168.1.2:3000/api/metiers");
            const resmet= await resmetiers.json();
            setMetiers(await resmet.data);
        }
        getmetiers();
    },[])

    //get villes
    useEffect(()=>{
        const getvilles = async() =>{
            const resvilles= await fetch("http://192.168.1.2:3000/api/villes");
            const resvil= await resvilles.json();
            setVilles(await resvil.data);
            
        }
        getvilles();
        
    },[])

    //get communes
     useEffect(()=>{
       const getcommunes = async() =>{
            const rescommune= await fetch("http://192.168.1.2:3000/api/villes");
           const rescomm= await rescommune.json();
           setCommune(await rescomm.data[1].communes);
           
        }
        getcommunes();
    },[])

    const dispatch = useDispatch()

    //console.log(userState)
    
 

   //get valut select

//    const [metier, setMetier]= useState();
//    const [ville, setVille]= useState();
//    const [commune, setCommunes]= useState();
//    const [constitue, setConstitue]= useState()
   
   const [artisanData, setArtisanData]= useState({
    metier:'',
    ville:'',
    commune:'',
    constitue:'',
    geograpique:''
   })
  
   const { metier, ville, commune, constitue, geographique} = artisanData;
    console.log(artisanData)
   // onchange

//    const onChange = (e) =>{
//         setArtisanData((prevState) =>({   
//             ...prevState,
//             [e.target.name] : e.target.value,   
            
//         }))
        
//     }

const onChange = (e) =>{
    setArtisanData(e.target.value)
}

   //btn submit form
   const onSubmit = e => {
        e.preventDefault()

        const artisData = {
            metier, 
            ville, 
            commune, 
            constitue, 
            geographique
        }

       dispatch(createArtisan({artisData}))
       setArtisanData('')
       console.log(artisData);
   }
   
  return (
    <div className='containerInscri'>
        <div className="contenSuiteIns">
            <div className="boxContent">
                <div className="headerContent">
                    <div className="title">
                        <h3>Suite inscription - artisan</h3>
                    </div>
                    <div className="toggol">
                        <h3>X</h3>
                    </div>
                </div>
            </div>
            <div className="bodyContent">
                <form onSubmit={onSubmit}>
                    <div className="input-metier">
                        <h4>Metier</h4>
                        <select name="metiers"  onChange={onChange}>
                            <option value="">--select Metiers--</option>
                            {
                                metiers.map((getmet, index)=>(
                                    <option key={index} name="metiers" value={metier}>{getmet.description}</option>
                                ))

                            }
                        
                        </select>
                    </div>
                    <div className="input-metier">
                        <h4>Adresse géographique</h4>
                        <input type="text"  name='geograpique' value={geographique}  onChange={onChange}/>
                        
                    </div>
                    <div className="content-loc">  
                        <div className="inputLoc">
                            <h4>Ville</h4>
                            <select name="ville" onChange={onChange}>
                                <option value="">--select Villes--</option>
                                {
                                villes.map((getvil, index)=>(
                                    <option key={index} name="ville"  value={ville}>{getvil.description}</option>
                                ))

                            }
                            </select>
                        </div>
                        <div className="inputLoc">
                            <h4>Commune</h4>
                            <select name= "communes" onChange={onChange}>
                                <option value="">--select commune--</option>
                            {
                                communes.map((getcomm, index)=>(
                                    <option key={index} name= "communes" value={commune}>{getcomm.libelle}</option>
                                ))

                            }
                            </select>
                        </div>

                    </div>
                    <div className="contentInfo">
                        
                        <div className="inputInfo">
                            <h4>Être vous constitué légalement?</h4>
                            <select onChange={onChange}>
                                <option placeholder='Select something'></option>
                                <option name="" value={constitue}>Oui</option>
                                <option name="" value={constitue}>Non</option>
                            </select>
                        </div>

                    </div>
                    <div className="footerContent">
                        <div className="btnSubmit">
                            <Link to="/addPicture"><button type="submit">Etape suivante</button></Link>
                        </div>
                        <div className="btnRetour">
                            <Link to="/profil"><p>Précédent</p></Link>
                        </div>
                        
                        
                    </div>
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default Artisan