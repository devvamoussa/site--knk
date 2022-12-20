import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../../../css/NavLinkcss/PublicationCss/BodyTime.css"

function BodyTime() {
     const [formData, setFormData] = useState()


    const onChange = (e) =>{
        setFormData((prevState) =>({   
            ...prevState,
            [e.target.name] : e.target.value, 
           
            
            
        }))
        
    }
  return (
    <>
        <div className='containerPublic'>
            <div className='contentLocal'>
                <div className="iterm-Time">
                    <div className="titleDescription">
                        <p>Quand comptez-vous réaliser vos travaux?</p>
                    </div>
                    <div className="containerDscrip">
                        <div className="inputTime">
                            <form action="">
                                <div className='inputRadio'>
                                    <input type="radio"  onChange={onChange} name="time-project" value="Immédiatement"/>
                                    <p>Immédiatement</p>
                                </div>
                                <div className='inputRadio'>
                                    <input type="radio" className='inputRadio' value="un-mois" name="time-project" onChange={onChange}/>
                                    <p>Dans 1 mois au plus</p>
                                </div>
                                <div className='inputRadio'>
                                    <input type="radio" className='inputRadio' value="trois-mois" name="time-project" onChange={onChange}/>
                                    <p>Dans 3 mois au plus</p>
                                </div>
                                <div className='inputRadio'>
                                    <input type="radio" className='inputRadio' value="budget" name="time-project" onChange={onChange}/>
                                    <p >je veux juste faire un budget</p>
                                </div>
                                
                            </form>
                        </div>     

                        <div className='btnseach'>
                            <Link className='linkClass' to="/publication/artisan-recommande"><button>Trouver un artisan</button></Link>
                        </div>
                    </div>
                </div>
                
            </div>

            </div>
        </>
  )
}

export default BodyTime