import React, { useState } from 'react';
import './App.css';

//components
import CircleMenu from './components/CircleMenu/CircleMenu';
import PcModel from './components/PcModel/PcModel';
/* import Carrousel from './components/Carrousel/Carrousel'; */


function App() {

  const [state, setState] = useState("")

  const clickInfo = (newContent) => {
    setState(newContent);
  }

  return (
    <section className='appContainer'>
      <h1 className='Wellcome'>Welcome</h1>
      <CircleMenu clickInfo={clickInfo} />
      <PcModel activeOption={state} />
    </section>
  )
}

export default App;
