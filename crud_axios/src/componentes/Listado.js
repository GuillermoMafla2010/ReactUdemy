import React, { Component } from "react";
import {Link} from 'react-router-dom'
import swal from 'sweetalert2'

import './Header.css'
class Listado extends Component {

  eliminarConfirmacion=()=>{
    
    swal.fire({
      title: 'Seguro que deseas eliminar el post?',
      text: "No se podra revertir",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.value) {
        this.props.eliminarPost(this.props.productos.id)
        swal.fire(
          'Eliminado',
          'El Post fue eliminado',
          'success'
        )
      }
    })
    
    
    
    
  }
  
  render() {
    
    return (
      <div className="container margen">
        <div className="card">
          <div className="card-body">
          <h6>Titulo:</h6> {this.props.productos.title}</div>
          <button className="btn btn-sm alert alert-success"><Link to={`/post/${this.props.productos.id}`}>Ver</Link></button>
          <button className="btn btn-sm alert alert-warning"><Link to={`/editar/${this.props.productos.id}`}>Modificar</Link></button>
          <button className="btn btn-sm alert alert-danger" onClick={this.eliminarConfirmacion}>Eliminar</button>
        </div>
      </div>
    );
  }
}

export default Listado;
