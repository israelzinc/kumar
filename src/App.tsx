import React from 'react';
import './App.css';
import HalfLayout from "./layouts/half"
import MainComponent from "./comnponents/main"

function App() {
  return <HalfLayout leftColumn={<div />} rightColumn={<MainComponent/>} />  
}

export default App;
