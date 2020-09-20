import React from 'react';
import './App.css';
import HalfLayout from "./layouts/half"
import SimpleLayout from "./layouts/simple";
import MainComponent from "./comnponents/main"

function App() {
  // return <HalfLayout leftColumn={<div />} rightColumn={<MainComponent/>} />  
  return <SimpleLayout mainElement={<MainComponent/>} />  
}

export default App;
