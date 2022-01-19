import React, { useState } from 'react';
import './App.css';

//components
import CircleMenu from './components/CircleMenu/CircleMenu';
import SelectList from "./components/List/List";
import PcModel from './components/PcModel/PcModel';


function App() {

  const [state, setState] = useState("")
  const [project, setProject] = useState("")

  //Toggle States
  const [toggleMenuStatus, setToggleMenu] = useState(false);
  const [togglePowerStatus, setTogglePower] = useState(false);

  const togglePower = () => {
    setTogglePower(!togglePowerStatus)
  }

  const clickInfo = (newContent) => {
    setState(newContent);
  }

  const toggleMenu = () => {
    setToggleMenu(!toggleMenuStatus)
  }

  const projectSelect = (newContent) => {
    setProject(newContent)
  }

  return (
    <section className='appContainer'>
      <h1 className='Welcome'>Welcome</h1>
      <div className='menuContainer'>
        <CircleMenu clickInfo={clickInfo} togglePower={togglePower} toggleMenu={toggleMenu} />
        <SelectList activeOption={state} projectSelect={projectSelect} menuDisplay={toggleMenuStatus} powerState={togglePowerStatus} />
      </div>
      <PcModel activeOption={state} powerState={togglePowerStatus} projectSelect={project} />
    </section>
  )
}

export default App;

