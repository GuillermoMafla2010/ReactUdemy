import React, { Component } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import './App.css';

class App extends Component {
  
  datosFormulario=(datos_clima)=>{
      console.log(datos_clima)
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Formulario
        datos_clima={this.datosFormulario}/>
      </div>

      
    );
  }
}

export default App;
