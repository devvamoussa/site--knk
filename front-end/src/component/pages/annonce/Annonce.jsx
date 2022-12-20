// import { useState } from "react";
import AnnonceBody from "./AnnonceBody"
// import SuiteAnnonce from "./SuiteAnnonce"


function Annonce({toggle, setToggle}) {
    
  
     

    return (
    <>
        <AnnonceBody setToggle={setToggle} toggle={toggle}/>
        
      </> 
        
  )

  
}

export default Annonce