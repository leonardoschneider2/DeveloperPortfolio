import React, { Component } from 'react';
import VsCodeImg from '../statics/VsCode.jpeg';
import './VsCode.css';

export default class VsCode extends Component {
  render() {

    return (
      <div className='VsCode'>
        <img className="VsCodeImg" src={ VsCodeImg } alt=""/>
      </div>
    )
  }
}
