import React, { Component } from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
class SingleEstudiante extends Component {
    render() {
        if(!this.props.estudiante) return null;
        return (

            
            <div className="container margen">
                <div class="card">
                    <h5 class="card-header">Datos del Estudiante</h5>
                    <div class="card-body">
                        
                        <p class="card-text">Nombre : {this.props.estudiante.nombre} {this.props.estudiante.apellido}</p>
                        <p class="card-text">Edad : {this.props.estudiante.edad} </p>
                        <p class="card-text">Correo : {this.props.estudiante.correo} </p>
                        <Link to="/estudiantes">   <button class="btn btn-primary"> Ir a lista de estudiantes</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleEstudiante;