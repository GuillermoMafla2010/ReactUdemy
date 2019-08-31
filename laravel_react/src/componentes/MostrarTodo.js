import axios from "axios";
import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import swal from 'sweetalert2';

import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";





class MostrarTodo extends Component {
  state = {
    estudiantes: [],
    facturas: [],
    paises:'',
    detalle:'',
    show2: false,
    id: null,
    id1: null,
    id2:null,
    nombre: null,
    nombre1: null,
    apellido: null,
    apellido1: null,
    edad: null,
    edad1: null,
    correo: null,
    correo1: null,
    fecha_nacimiento1: null,
    foto: "",
    activePage: 1,
    itemsCountPerPage: 1,
    totalItemsCount: 1,
    pageRangeDisplayed: 3,
    show: false,
    show1: false
  };

  handlePageChange = this.handlePageChange.bind(this);

  handleShow = this.handleShow.bind(this);

  handleClose = this.handleClose.bind(this);

  handleShowEditar = this.handleShowEditar.bind(this);

  handleCloseEditar = this.handleCloseEditar.bind(this);

  handleShowFactura = this.handleShowFactura.bind(this);

  handleCloseFactura = this.handleCloseFactura.bind(this);

  componentDidMount() {
    this.obtenerestudiantes();
    console.log(this.datosstorage())

    if(localStorage.length===0){
      swal.fire("Por favor debes iniciar sesion para acceder a este recurso","Error","error")
      this.props.history.replace("/login")
    }
    
    /* const valor=JSON.parse(localStorage.getItem('key'));
    
    if(!valor) return null;
    let config={
      headers:{
        'Authorization': 'Bearer ' + valor.auth_token
      }
    }
    console.log(config); */
   
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(id, nombre, apellido, edad, email, foto, facturas,paises) {
    this.setState({
      show: true,
      id: id,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      correo: email,
      foto: foto,
      facturas: facturas,
      paises:paises.nombre
    });
  }

  handleShowEditar(id, nombre, apellido, edad, correo, fecha_nacimiento) {
    this.setState({
      show1: true,
      id1: id,
      nombre1: nombre,
      apellido1: apellido,
      edad1: edad,
      correo1: correo,
      fecha_nacimiento1: fecha_nacimiento
    });
  }

  handleCloseEditar() {
    this.setState({ show1: false });
  }


  handleShowFactura(id) {
    this.setState({
      show2: true,
      id2: id,
      
    });
  }

  handleCloseFactura() {
    this.setState({ show2: false });
  }

  datosstorage=()=>{
    const valor=JSON.parse(localStorage.getItem('key'));
    if(!valor) return null;
    let config={
      headers:{
        'Authorization': 'Bearer ' + valor.auth_token
      }
    }
    return (valor ,config);
  }

  obtenerestudiantes = () => {
    
    

    
    
    axios
      .get(
        "http://192.168.100.54:81/apirest_php/apirestfull/public/api/estudiantes",
        this.datosstorage()
      )
      // .get("http://localhost:82/api/estudiantes")
      .then(resultado => {
        this.setState({
          estudiantes: resultado.data.data,

          itemsCountPerPage: resultado.data.per_page,
          totalItemsCount: resultado.data.total,
          activePage: resultado.data.current_page
        });
      });

    console.log(this.state.estudiantes);
  };

  editarEstudiante = datos => {
    
    axios
      .put(
        `http://192.168.100.54:81/apirest_php/apirestfull/public/api/estudiantes/${datos.id}`,
        datos,
        this.datosstorage()
      )
      .then(respuesta => {
        if (respuesta.status === 200) {
          this.obtenerestudiantes();
        }
        this.setState({
            itemsCountPerPage: respuesta.data.per_page,
          totalItemsCount: respuesta.data.total,
          activePage: respuesta.data.current_page
        })
      });
  };

  handlePageChange(pageNumber) {
   
    
    console.log(`active page is ${pageNumber}`);
    axios
      .get(
        `http://192.168.100.54:81/apirest_php/apirestfull/public/api/estudiantes?page=${pageNumber}`,
      this.datosstorage()
      )
      .then(respuesta => {
        console.log(respuesta);
        this.setState({
          estudiantes: respuesta.data.data,
          itemsCountPerPage: respuesta.data.per_page,
          totalItemsCount: respuesta.data.total,
          activePage: respuesta.data.current_page
        });
      });
  }

  nombreHandler = e => {
    this.setState({ nombre1: e.target.value });
  };

  apellidoHandler = e => {
    this.setState({ apellido1: e.target.value });
  };
  edadHandler = e => {
    this.setState({ edad1: e.target.value });
  };
  correoHandler = e => {
    this.setState({ correo1: e.target.value });
  };
  fechaHandler = e => {
    this.setState({ fecha_nacimiento1: e.target.value });
  };

  formulario = () => {
    this.setState({
      show1: false
    });
    const user = {
      id: this.state.id1,
      nombre: this.state.nombre1,
      apellido: this.state.apellido1,
      edad: this.state.edad1,
      correo: this.state.correo1,
      fecha_nacimiento: this.state.fecha_nacimiento1
    };
    console.log(user);
    this.editarEstudiante(user);
  };

  verEstudiantes() {
    if (!this.state.estudiantes) return null;
  }

  detallefactura=(e)=>{
      console.log(e.target.value);
      this.setState({
          detalle:e.target.value
      })
  }

  formulariofactura=(e)=>{
      const factura ={
          detalle:this.state.detalle,
          estudiante_id:this.state.id2
      }
this.setState({
    show2:false
})
      this.enviarfactura(factura);
  }

  enviarfactura=(e)=>{
      axios.post(`http://192.168.100.54:81/apirest_php/apirestfull/public/api/facturas`,
      e,
      this.datosstorage()
      )
      .then(respuesta=> this.obtenerestudiantes());
  }

  cerrarSesion=(e)=>{
    localStorage.clear();
    if(localStorage.length===0){
      swal.fire("Cerrando sesion","","success");
      
     setTimeout(()=>{this.props.history.push("/login")},2000) 
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
        <button onClick={this.cerrarSesion}>Cerrar Sesion</button>
          </div>
       
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Detalle del Estudiante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>Nombre:</b>
            {this.state.nombre}
            <br />
            <b>Apellido:</b>
            {this.state.apellido}
            <br />
            <b>Edad:</b>
            {this.state.edad}
            <br />

            <b>Correo:</b>
            {this.state.correo}
            <br />

            <b>Pais: </b>
            {this.state.paises}
            <br/>

            <b>Facturas</b>
            {this.state.facturas.map(factura => (
              <li key={factura.id}>{factura.detalle}</li>
            ))}
            <img
              className="img-thumbnail"
              src={`http://192.168.100.54:81/apirest_php/apirestfull/storage/app/images/${
                this.state.foto
              }.jpg`}
            />
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

        <Modal show={this.state.show1} onHide={this.handleCloseEditar}>
          <Modal.Header closeButton>
            <Modal.Title>Modificacion Estudiante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              <form onSubmit={this.formuario}>
                Nombre{" "}
                <input
                  type="text"
                  defaultValue={this.state.nombre1}
                  onChange={e => this.nombreHandler(e)}
                  name="nombre"
                />
                <br />
                Apellido{" "}
                <input
                  type="text"
                  defaultValue={this.state.apellido1}
                  name="apellido"
                  onChange={e => this.apellidoHandler(e)}
                />
                <br />
                Edad{" "}
                <input
                  type="text"
                  defaultValue={this.state.edad1}
                  name="edad"
                  onChange={e => this.edadHandler(e)}
                />
                <br />
                Correo{" "}
                <input
                  type="text"
                  defaultValue={this.state.correo1}
                  name="correo"
                  onChange={e => this.correoHandler(e)}
                />
                <br />
                Fecha Nacimiento{" "}
                <input
                  type="text"
                  defaultValue={this.state.fecha_nacimiento1}
                  name="fecha"
                  onChange={e => this.fechaHandler(e)}
                />
                <br />
              </form>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseEditar}>
              Close
            </Button>
            <Button variant="primary" onClick={this.formulario}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={this.state.show2} >
          <Modal.Header >
            <Modal.Title>Creando Factura</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              <form>
                  Detalle Factura
                  <input type="text" required onChange={this.detallefactura}/>
                
              </form>
              
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseFactura}>
              Close
            </Button>
            <Button variant="primary" onClick={this.formulariofactura}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="container">

        
          {this.state.estudiantes.map((estudiante, indx) => (
            <div key={estudiante.id}>
              <div className="card mt-2">
                <div className="card-body">
                  {estudiante.nombre} {estudiante.apellido}
                  <button className="btn btn-success mr-1"
                    onClick={() =>
                      this.handleShow(
                        estudiante.id,
                        estudiante.nombre,
                        estudiante.apellido,
                        estudiante.edad,
                        estudiante.email,
                        estudiante.foto,
                        estudiante.facturas,
                        estudiante.paises
                      )
                    }
                  >
                    
                    Ver
                  </button>
                  <button className="btn btn-warning mr-1"
                    onClick={() =>
                      this.handleShowEditar(
                        estudiante.id,
                        estudiante.nombre,
                        estudiante.apellido,
                        estudiante.edad,
                        estudiante.email,
                        estudiante.fecha_nacimiento
                      )
                    }
                  >
                    Editar
                  </button>
                  <button onClick={()=>this.handleShowFactura(estudiante.id)} className="btn btn-info"> Crear Factura</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {this.verEstudiantes()}

        <div class="d-flex justify-content-center mt-2">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={this.state.pageRangeDisplayed}
            onChange={this.handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MostrarTodo;
