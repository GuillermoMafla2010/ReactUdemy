import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navegacion extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">React</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" ><Link to ="/estudiantes">Estudiantes</Link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><Link to ="/crear">Crear Estudiante</Link></a>
      </li>
      
      
    </ul>
  </div>
</nav>
            </div>
        );
    }
}

export default Navegacion;