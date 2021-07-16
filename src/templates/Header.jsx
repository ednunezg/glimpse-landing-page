import React from 'react';

import {Link} from "react-router-dom";
import * as Constants from "../constants"

import logoTransparentWhite from '../assets/img/logo-transparent-white.png'

class Header extends React.Component {
  render() {
    return (
      <nav id="header" className="navbar navbar-expand-md navbar-light d-flex">
        <a className="navbar-brand mr-auto" href="/">
          <img src={logoTransparentWhite} height="30" alt="" />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fas fa-bars"></span>
        </button>
          
        <div className="collapse navbar-collapse flex-grow-0" id="nav-collapse">
          <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          {/* <li className="nav-item"><Link className="nav-link" to="#pricing">Pricing</Link></li>
          <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li> */}
          <li className="nav-item"><Link className="nav-link" to="/faq">FAQs</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><button className="nav-button" onClick={() => {window.location.href = Constants.APP_PAGE}}>Login</button></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header