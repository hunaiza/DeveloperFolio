import React from "react";
import Nav from './Components/Nav';
import Home from "./Components/Home";
import Portfolio from './Components/Portfolio';
import Myself from './Components/Myself'

function App() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <Nav />
      <Home />
      <Portfolio />
      <Myself />
    </div>
  );
}

export default App;
