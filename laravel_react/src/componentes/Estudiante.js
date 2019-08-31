import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class Estudiante extends Component {
    
state={
    show:false,
    id:null,
    nombre:null,
    apellido:null,
    edad:null,
    correo:null
}

    handleShow = this.handleShow.bind(this);


    handleClose = this.handleClose.bind(this);

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow(id,nombre,apellido,edad,correo,foto) {
          this.setState({id:id,
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            correo:correo,
            foto:foto
        })
        this.setState({ show: true });
      }


    
    render() {
        
        const { nombre, apellido, edad, correo, id,foto } = this.props.estudiante
        return (

            <React.Fragment>
                 <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Detalle del Estudiante</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.id} {this.state.nombre} {this.state.apellido} {this.state.edad} {this.state.correo} 
          <img className="img-thumbnail" src={`http://localhost:81/apirest_php/apirestfull/storage/app/images/${this.state.foto}.jpg`} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
            <div>
                <div className="card mt-1" >
                    <div className="card-body">
                        <h5 className="card-title ">Datos Alumno</h5>
                        
                        <p className="card-text">Nombre : {nombre} {apellido}</p>
                        <p className="card-text">Edad : {edad}</p>
                        <button className="btn btn-sm alert alert-success"><Link to={`/ver/${id}`}>Ver</Link></button>
                        <button className="btn btn-sm alert alert-success"><Link to={`/editar/${id}`}>Editar</Link></button>
                        <button className="btn btn-sm alert alert-danger" onClick={()=>this.props.eliminar(id)}>Eliminar</button>
                        <button className="btn btn-sm alert alert-danger" onClick={()=>this.handleShow(id,nombre,apellido,edad,correo,foto)}>Modal</button>
                        {id}
                    </div>
                </div>

                
                
            </div>
               
            </React.Fragment>
        );
    }
}

export default Estudiante;