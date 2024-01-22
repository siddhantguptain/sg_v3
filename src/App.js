import './App.css';

import PANEL_LEFT from './components/SidePANELS/Panel_LEFT/Panel_LEFT.js';
import PANEL_RIGHT from './components/SidePANELS/Panel_RIGHT/Panel_RIGHT.js';

import HOME from './components/Home/Home.js';
import ABOUT_ME from './components/AboutME/AboutME.js';
import CERTIFICATES from './components/Certificates/Certificates.js';


function App() {
  return (
    <div className="AppContainer">
        <div className="LEFTContainer">
            <PANEL_LEFT />
        </div>
        <div className="MAINContainer">
            <HOME />
            <ABOUT_ME />
            <CERTIFICATES />
        </div>
        <div className="RIGHTContainer">
            <PANEL_RIGHT/>
        </div>
    </div>
  );
}

export default App;
