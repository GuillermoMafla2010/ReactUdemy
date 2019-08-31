import React, { Component } from 'react';
import './SingleProducto.css'
class SingleProducto extends Component {
    
    render() {
        const {imagen,nombre,precio,descripcion}=this.props.producto;
        const foto = `/img/img/${this.props.producto.imagen}.png`   
        if(!imagen) return null;  
        return (
           <div className="info-producto">
                <div className="imagen">
                    <img src= {foto} alt={foto}/>
                </div>

                <div className="info">
                    <h2>
                        {nombre}
                    </h2>

                    <p className="precio">{precio}</p>
                    <p>{descripcion}</p>
                </div>
           </div>
        )
    }
}

export default SingleProducto;