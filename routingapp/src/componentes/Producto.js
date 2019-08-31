import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Productos.css';
class Producto extends Component {
    render() {
        const imagen=`img/img/${this.props.informacion.imagen}.png`
        return (
           
               
            

            <li>
                <img src={imagen}/>
                <p><span>{this.props.informacion.nombre}</span></p>
                
                <p><span>{this.props.informacion.precio}</span></p>
                
                <Link to={`/producto/${this.props.informacion.id}`}>
                    Mas Informacion
                </Link>
            </li>
            
          
        );
    }
}

export default Producto;