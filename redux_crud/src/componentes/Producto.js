import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EditarProducto from './EditarProducto'
//importando redux
import {connect} from 'react-redux'
import {eliminarProducto} from '../actions/productosActions'
import store from '../store'
class Producto extends Component {
    

    eliminarProducto=()=>{
        console.log("Eliminando " + this.props.info.id)
        this.props.eliminarProducto(this.props.info.id)
    }

    componentDidMount(){
       console.log(store.getState().productos.productos.length)
    }

   

    render() {
        const error = this.props.productos.length?'':<div className="alert alert-danger">No existen productos existentes</div>
        
       
        const style={
            width: "18rem;"
        }        

        const puntero={
            cursor:"pointer"
        }

        const text={
            cursor:"not-allowed"
        }
        
        return (
            <div className="container p-2">
 
            {error}
                <div class="card" style={style}>
               
  <ul class="list-group list-group-flush">
  <li class="list-group-item">{this.props.info.nombre}
  <li className="list-group-item text-right">
  <Link to={`/editar/${this.props.info.id}`}><p className="btn btn-warning mr-1" style={puntero} >Editar</p></Link>
  <p className="btn btn-danger mr-1" style={puntero} onClick={this.eliminarProducto}>Eliminar</p>
  <p className="btn btn-success focus:off" style={text}>${this.props.info.precio}</p>
  </li></li>
    
  </ul>
</div>
            </div>
        );
    }
}

const mapStateToProps=state=>({
    productos:state.productos.productos
})

export default connect (mapStateToProps,{eliminarProducto}) (Producto);