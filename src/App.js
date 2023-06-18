import React from 'react';
import HeaderMenu from './components/HeaderMenu';

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import LineUp from "./components/LineUp"
import Schedule from "./components/Schedule"
import base from "./base";

class App extends React.Component {
  state = {
    lineup: {},
  }
  componentDidMount(){
    this.ref = base.syncState(`lineup`, {
      context: this,
      state: "lineup",
    });
  }
  
  render(){
 
    return (
      <>
      <HeaderMenu/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="lineup" element={ <LineUp/> } />
        <Route path="schedule" element={ <Schedule/> } />
      </Routes>
      </>
      );
  }

}
export default App;
