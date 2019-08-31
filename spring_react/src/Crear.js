import React, { Component } from 'react';

class Crear extends Component {
    
    nombre=React.createRef()
    apellido=React.createRef()
    correo=React.createRef()
    fecha=React.createRef()
    edad=React.createRef()

    leerFormulario=(e)=>{
        e.preventDefault()

        const estudiante_nuevo={
            nombre:this.nombre.current.value,
            apellido:this.apellido.current.value,
            correo:this.correo.current.value,
            fecha_nacimiento:new Date (this.fecha.current.value),
            edad:this.edad.current.value
        }

        this.props.enviarFormulario(estudiante_nuevo)
        let fecha=new Date()
        console.log(typeof fecha)
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
                    <label className>Nombres</label>
                    
                </div>
              
                <div className="col-md-5">
                <input type="text" className="form-control" ref={this.nombre}></input>
                </div>

              </div>


              <div className="row margen">
                <div className="col-md-3">
                    <label className>Apellido</label>
                    
                </div>
              
                <div className="col-md-5">
                <input type="text" className="form-control" ref={this.apellido}></input>
                </div>

              </div>

              <div className="row margen">
                <div className="col-md-3">
                    <label className>Email</label>
                    
                </div>
              
                <div className="col-md-5">
                <input type="email" className="form-control" ref={this.correo}></input>
                </div>

              </div>
              <div className="row margen">
                <div className="col-md-3">
                    <label className>Edad</label>
                    
                </div>
              
                <div className="col-md-5">
                <input type="number" className="form-control" ref={this.edad}></input>
                </div>

              </div>

              <div className="row margen">
                <div className="col-md-3">
                    <label className>Fecha Nacimiento</label>
                    
                </div>
              
                <div className="col-md-3">
                <input type="date" className="form-control" ref={this.fecha}></input>
                </div>

              </div>
                   
<br/>
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