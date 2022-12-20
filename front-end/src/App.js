import Accueil from "./component/pages/Accueil";
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Verification from "./component/pages/Verification";
import Profil from "./component/pages/Profil";
import Artisan from "./component/pages/contentStepInscrip/Artisan";
import Pro from "./component/pages/contentStepInscrip/Pro";
import AddPicture from "./component/pages/contentStepInscrip/AddPicture";
import PageGps from "./component/pages/contentStepInscrip/PageGps";
import ArtisanConnect from "./component/pages/connectPages/ArtisanConnect/ArtisanConnect";
import ProConnect from "./component/pages/connectPages/ProConnect/ProConnect";
import ParticulierConnect from "./component/pages/connectPages/ParticulierConnect/ParticulierConnect";
import Notification from "./component/pages/notificationPage/Notification";
import Recherche from "./component/pages/recherche/Recherche";
import Shats from "./component/pages/Chats/Shats";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mesprojets from "./component/pages/Navlink/projets/Mesprojets";
import Publication from "./component/pages/Navlink/publication/Publication";
import LocalPublication from "./component/pages/Navlink/publication/localPublication/LocalPublication";
import DescripProjet from "./component/pages/Navlink/publication/description-projet/DescripProjet";
import TimeProjet from "./component/pages/Navlink/publication/timeProjet/TimeProjet";
import Recommande from "./component/pages/Navlink/publication/recommander/Recommande";
import Parametre from "./component/pages/Navlink/compteInfo/Parametre";
import Annonce from "./component/pages/annonce/Annonce";





function App() {

  

  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="//profil/particulier" element={<ParticulierConnect /> }/>
        <Route path="/profil/artisan" element={<Artisan />} />
        <Route path="/profil/pro" element={< Pro />} />
        <Route path="/addPicture" element={< AddPicture />} />
        <Route path="/pageGps" element={< PageGps />} />
        <Route path="/artisanConnect" element={< ArtisanConnect /> }/>
        <Route path="/proConnect" element={< ProConnect /> }/>
        <Route path="/notification" element={< Notification /> }/>
        <Route path="/recherche" element={< Recherche /> }/>
        <Route path="/shats" element={< Shats /> }/>
        <Route path="/projets" element={< Mesprojets /> }/>
        <Route path="/publication" element={< Publication /> }/>
        <Route path="/parametre" element={< Parametre /> }/>
        <Route path="/annonce" element={< Annonce /> }/>
        <Route path="/publication/localisation" element={< LocalPublication /> }/>
        <Route path="/publication/description-projet" element={< DescripProjet /> }/>
        <Route path="/publication/time-projet" element={< TimeProjet /> }/>
        <Route path="/publication/artisan-recommande" element={< Recommande /> }/>
        
      </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
