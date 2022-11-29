import React, { Component } from 'react';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Tecnologies from '../components/Tecnologies';

export default class Home extends Component {
  render() {
    console.log('oiiii');
    return (
      <main class="App">
        <Description/>
        <Tecnologies/>
        <Projects/>
      </main>
    )
  }
}
