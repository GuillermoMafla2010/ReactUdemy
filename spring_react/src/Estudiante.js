import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Estudiante extends Component {
    render() {
        return (
            <React.Fragment>
                
               

        <div className="col-6 col-sm-4 col-md-3 ">
          <div class="card-group">
            <div class="card">
              
              <div class="card-body">
              <p>{this.props.estudiante.nombre} {this.props.estudiante.apellido}</p>
             ID: <badge className="badge badge-info">{this.props.estudiante.id}</badge>
               
              </div>
              <div class="card-footer">
                <small class="text-muted"><button><Link to={`/editar/${this.props.estudiante.id}`}>Ver el perfil del estudiante</Link></button></small>
              </div>
            </div>
            
          </div>
          <br/>
        </div>
        
      </React.Fragment>
        );
    }
}

export default Estudiante;