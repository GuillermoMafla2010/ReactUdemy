import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
class App extends Component {
  
  state={
    estudiantes:[]
  }

  componentWillMount(){
    this.estudiantes();
  }


  estudiantes=(datos)=>{
    axios.get("http://localhost:81/listacors/public/api/estudiante").then(
      respuesta=>
      this.setState({
        estudiantes:respuesta.data
      })
    )
  }
  
  
  render() {
    return (
      <div className="App">

          {this.state.estudiantes.map(estudiante=>{
            return <li key={estudiante.id}>{estudiante.nombre}</li>
          })}
          
Hola

      </div>
    );
  }
}

export default App;
