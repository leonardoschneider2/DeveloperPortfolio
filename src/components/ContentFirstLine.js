import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../statics/LOGO.png';
import './ContentFirstLine.css';
import Pointer from './Pointer';

export default class FirstLine extends Component {
  render() {
    return (
      <div class="box-content-firstline">
        <div class="content-firstline">
          {/* HABILITAR LINK DE ROTAS */}
          <div className="presents">
            <h1 className="presents-title">
              I'm
              <span className="presents-title-alternate"> Leo </span>
              Schneider.
            </h1>
            <h2 className="presents-subtitle">Web Developer FRONT END<Pointer/></h2>
            <div className="presents-links">
              <Link className="presents-hireme" to="/contacts">HIRE ME</Link>
              <Link className="presents-curriculum" to="/">RESUME</Link>
            </div>
          </div>
          <img class="flag-logo" src={ Logo } alt="Logo"/>
        </div>
      </div>
    )
  }
}
