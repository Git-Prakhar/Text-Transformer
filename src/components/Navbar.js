import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div id="navbar">
      <ul id="navheading" style={{borderBottom : `2px solid ${props.currMode==='white'?'black':'white'}`}}>
        <li>{props.title}</li>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.modeFunc}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable {props.currMode==='white'?'Dark':'Light'} Mode 
          </label>
        </div>
      </ul>
    </div>
  );
}
