import React, { Component } from 'react';
import Estudiante from './Estudiante' 
import './Header.css'
class Estudiantes extends Component {
    render() {
        return (
<React.Fragment>
            <div class="jumbotron jumbotron-fluid margen ">
            <div class="container">
              <h1 class="display-4">Ingreso de estudiantes</h1>
              <p class="lead">Desde aqui ingresa los estudiantes </p>
            </div>
          </div>  
            <div className="col-12 p-5 row">
            {Object.keys(this.props.estudiantes).map(estudiante=><Estudiante estudiante ={this.props.estudiantes[estudiante]} key={estudiante}/>)}            
            </div>
            </React.Fragment>
        );
    }
}

export default Estudiantes;