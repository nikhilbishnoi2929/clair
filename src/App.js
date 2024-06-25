import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Herosection from './components/Herosection';
import AboutCLAIR from './components/AboutCLAIR';
import SmartContract from './components/SmartContract';
import Tokenomics from './components/Tokenomics';
import Audited from './components/Audited';
import Roadmap from './components/Roadmap';
import Socials from './components/Socials';
import Lastsection from './components/Lastsection';
import Frequently from './components/Frequently';

function App() {
  return (
    <div className=' overflow-hidden'>
       <>
    {/* <Herosection/> */}
    <AboutCLAIR/>
    <SmartContract/>
    <Tokenomics/>
    <Audited/>
    <Roadmap/>
    <Frequently/>
    {/* <Socials/> */}
    {/* <Lastsection/> */}
    </>
    </div>
  );
}

export default App;
