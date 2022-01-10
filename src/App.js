import React, { useState } from 'react';
import './App.css';

//components
import CircleMenu from './components/CircleMenu/CircleMenu';
import SelectList from "./components/List/List";
import PcModel from './components/PcModel/PcModel';


function App() {

  const [state, setState] = useState("")
  const [power, setPower] = useState("")
  const [project, setProject] = useState("")

  const clickInfo = (newContent) => {
    setState(newContent);
  }

  const projectSelect = (newContent) => {
    setProject(newContent)
  }

  const powerInfo = () => {
    if (power == "on") {
      setPower("off")
    } else { setPower("on") }
  }

  return (
    <section className='appContainer'>
      <h1 className='Welcome'>Welcome</h1>
      <CircleMenu clickInfo={clickInfo} powerInfo={powerInfo} />
      <SelectList projectSelect={projectSelect} />
      <PcModel activeOption={state} powerState={power} projectSelect={project} />
    </section>
  )
}

export default App;

