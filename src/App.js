import './App.css';
import AOS from "aos"
import "aos/dist/aos.css"
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
import BackToTopButton from './components/BackToTopButton';
import { useEffect } from 'react';

function App() {
useEffect(() => {
  AOS.init({
    once: 'true',
    duration: 1600,
    disable: 'phone',
  })
}, [])
  return (
    <div className=' overflow-hidden'>
      <Herosection />
      <AboutCLAIR />
      <SmartContract />
      <Tokenomics />
      <Audited />
      <Roadmap />
      <Frequently />
      <Socials />
      <Lastsection />
      <BackToTopButton />
    </div>
  )
}

export default App;
