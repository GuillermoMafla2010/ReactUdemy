import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Estudiante extends Component {
    render() {
        const { nombre, apellido, edad, correo, id } = this.props.estudiante
        return (
            <div>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title ">Datos Alumno</h5>
                        
                        <p className="card-text">Nombre : {nombre} {apellido}</p>
                        <p className="card-text">Edad : {edad}</p>
                        <button className="btn btn-sm alert alert-success"><Link to={`/ver/${id}`}>Ver</Link></button>
                        {id}
                    </div>
                </div>
            </div>
        );
    }
}

export default Estudiante;