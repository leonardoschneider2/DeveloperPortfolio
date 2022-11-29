import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../statics/LogoName.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-box">
          {/* LOGO MARCA ESCRITO LEONARDO SCHNEIDER E SÍMBOLO BINÁRIO */}
          <Link to="/">
            <div className="logo">
              <img className="logo-header" src={ Logo } alt=""/>
            </div>  
          </Link>
          {/* NAVEGAÇÃO ENTRE ROTAS DA APLICAÇÃO, AINDA NÃO EXISTEM ... */}
          <nav className="navigation">
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </nav>
          {/* OPÇÕES COMO POR EXEMPLO, DARK MODE */}
          <div className="options">
  
          </div>
        </div>
      </header>
      
    )
  }
}
