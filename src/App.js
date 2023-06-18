import React from 'react';
import HeaderMenu from './components/HeaderMenu';

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import LineUp from "./components/LineUp"
import Schedule from "./components/Schedule"

class App extends React.Component {
  state = {
    lineup: {},
  }
  componentDidMount(){

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
