import React, { Component } from 'react';

//importar redux

import {connect } from 'react-redux';
import {mostrarProductos} from '../actions/productosActions'

//importar componentres
import Producto from './Producto'

class Productos extends Component {
    
    componentDidMount(){
        this.props.mostrarProductos();
    }
    
    render() {
       //if (!this.props.mostrarProductos()) return null;


        return (
                
              <React.Fragment>  
                {this.props.productos.map(producto=>(<Producto key={producto.id} info={producto}/>))}
                </React.Fragment>
        );
    }
}






const mapStateToProps=state=>({
    productos:state.productos.productos
})


export default connect (mapStateToProps,{mostrarProductos}) (Productos);