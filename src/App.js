import './App.css';

import HOME from './components/Home/Home.js';
import PANEL_LEFT from './components/SidePANELS/Panel_LEFT/Panel_LEFT.js';
import PANEL_RIGHT from './components/SidePANELS/Panel_RIGHT/Panel_RIGHT.js';

function App() {
  return (
    <div className="AppContainer">
        <div className="LEFTContainer">
            <PANEL_LEFT />
        </div>
        <div className="MAINContainer">
            <HOME />
        </div>
        <div className="RIGHTContainer">
            <PANEL_RIGHT/>
        </div>
    </div>
  );
}

export default App;
