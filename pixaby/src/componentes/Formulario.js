import React, { Component } from "react";
import '../App.css'
class Formulario extends Component {
  
    imagen=React.createRef();
  
        leerFormulario=(e)=>{
            e.preventDefault();
            const imagen=this.imagen.current.value

            this.props.enviarimagen(imagen)

            
            
        }
    
  
    render() {

        return (
        
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Busqueda de imagenes</h1>
            <form className="form-inline App derecho" onSubmit={this.leerFormulario}>
  <div className="form-group mb-2 derecho">
    <label htmlFor="staticEmail2" className="sr-only ">Email</label>
    <input type="text"  className="form-control-plaintext" id="staticEmail2" value="Digita imagen a buscar"/>
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="inputPassword2" className="sr-only">Password</label>
    <input type="text" className="form-control" id="inputPassword2" ref={this.imagen} />
  </div>
  <button type="submit" className="btn btn-primary mb-2">Buscar</button>
</form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
