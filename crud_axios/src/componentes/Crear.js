import React, { Component } from "react";
import './Header.css'
import swal from 'sweetalert2'
import {Link} from 'react-router-dom'
class Crear extends Component {
  state={
    title:'',
    body:''
  }
  //crear Ref

  title = React.createRef()
  body=React.createRef()


  leerFormulario=(e)=>{
    e.preventDefault();

    //leer los refs
    const title=this.title.current.value,
          body=this.body.current.value
    
          

    const info_post={
        title,body,userId:1
    }
    
    this.props.enviarFormulario(info_post)
    
  }
  mensaje=()=>{
    
    swal.fire(
      'Post creado con exito',
      `EL post  fue creado con exito `,
      'success'
      
    )
    console.log(this.state.title)
    
  }
  
  render() {

    

    return (
      <div className="container margen">
        <div className="card">
          <div className="card-header">Crear Post</div>
          <div className="card-body">
            <h5 className="card-title">Ingresa tus datos aqui</h5>
            <p clasNames="card-text">
              <form className="form form-group" onSubmit={this.leerFormulario}>

              <div className="row">
                <div className="col-md-3">
                    <label className>Titulo</label>
                    
                </div>
              
                <div className="col-md-5">
                <input type="text" className="form-control" ref={this.title}></input>
                </div>

              </div>


              <div className="row margen">
                <div className="col-md-3">
                    <label className>Descripcion</label>
                    
                </div>
              
                <div className="col-md-5">
                <input type="text" className="form-control" ref={this.body}></input>
                </div>

              </div>
                   

              <input type="submit" className="btn btn-outline-primary" value="Guardar" onClick={this.mensaje}  />


              </form>
            </p>
            
           
          </div>
        </div>
      </div>
    );
  }
}

export default Crear;
