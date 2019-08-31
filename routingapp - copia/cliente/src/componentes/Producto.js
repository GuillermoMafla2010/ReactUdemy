import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Productos.css';
class Producto extends Component {
    render() {

        //console.log(this.props.informacion)
        const imagen=`img/img/${this.props.informacion.imagen}.png`
        
        return (
           
               
            

            <li>
                <p>{this.props.informacion.id}</p>
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