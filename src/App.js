import {useState} from 'react';
import './App.css';

import PANEL_LEFT from './components/SidePANELS/Panel_LEFT/Panel_LEFT.js';
import PANEL_RIGHT from './components/SidePANELS/Panel_RIGHT/Panel_RIGHT.js';

import HOME from './components/Home/Home.js';
import ABOUT_ME from './components/AboutME/AboutME.js';
import CERTIFICATES from './components/Certificates/Certificates.js';
import FOOTER from './components/Footer/Footer.js';



function App() {
  const [preloader , setPreloader] = useState(true);
  return (
    <>
    {preloader ?(
      <div className="LoaderContainer">
        <h1>Namaste</h1>
      </div>
    ) :(
    <div className="AppContainer">
        <div className="LEFTContainer">
            <PANEL_LEFT />
        </div>
        <div className="MAINContainer">
            <HOME />
            <ABOUT_ME />
            <CERTIFICATES />
            <FOOTER />
        </div>
        {/* <div className="RIGHTContainer">
            <PANEL_RIGHT/>
        </div> */}
    </div>
   
    )
      }
    </>
  );
}

export default App;
