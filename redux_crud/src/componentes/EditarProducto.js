import React, { Component } from 'react';

import {connect} from 'react-redux';
import {mostrarProducto} from '../actions/productosActions'
import store from '../store'
class EditarProducto extends Component {
    nombre=React.createRef();
    precio=React.createRef();

    crearProducto=(e)=>{
        e.preventDefault();

        const nuevo_producto={
            nombre:this.nombre.current.value,
            precio:this.precio.current.value
        }

            this.props.agregarProducto(nuevo_producto);


    }
   
   componentDidMount(){
    const {id} =  this.props.match.params
    this.props.mostrarProducto(id)
     
   }

   
  static getDerivedStateFromProps(props,state){
     
     console.log(props)
    const {nombre,precio}=props.productos
    console.log(nombre)
    console.log(precio)

   }
   
   
    render() {
        console.log(this.mostrarProducto)
        return (
            <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Agregar Nuevo Producto</h2>
                        <form onSubmit={this.crearProducto}>
                            <div className="form-group">
                                <label>Titulo</label>
                                <input type="text" className="form-control" placeholder="Titulo" ref={this.nombre} defaultValue={this.nombre}/>
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input type="text" className="form-control" placeholder="Precio" ref={this.precio} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
      
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps=state=>({
    productos:state.productos.productos
})

export default connect (mapStateToProps,{mostrarProducto})(EditarProducto);