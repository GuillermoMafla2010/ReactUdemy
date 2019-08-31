import React, { Component } from 'react';
import LaLiga from './componentes/LaLiga' 
import Equipos from './componentes/Equipos'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <LaLiga>
        
        <Equipos/>


        </LaLiga>
      </div>
    );
  }
}

export default App;
