import React, { Component } from 'react';
import photograph from '../statics/ProfilePhotograph.png';
import './Description.css';

export default class Description extends Component {
  render() {
    return (
      <div className="description">
        <img className="photograph" src={ photograph } alt=""/>
        <div className="my-description">
          <h2 className="my-description-title">WHO AM I <span className="blue-span">?</span></h2>
          <p className="my-description-paragraph">
            Since January 2021 I'm owner in Pão Suíço Bakery,
            in Contagem city, Minas Gerais state, Brazil.
            I've 22 years,
            studying web development Full Stack in Trybe
            since March 2022.
            I've never worked with development yet,
            can you help me to get my first opportunity ?
          </p>
        </div>
      </div>
    )
  }
}
