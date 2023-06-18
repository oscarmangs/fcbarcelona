import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class HeaderMenu extends React.Component {
  render(){
    return (
      <div className="topnav">
        <Link className="active" to="/">HOME</Link>
        <Link to="lineup">LINEUP</Link>
        <Link to="schedule">SCHEDULE</Link>
      </div>
      );
  }

}
export default HeaderMenu;