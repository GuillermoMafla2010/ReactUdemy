import React, { Component } from 'react';
import './Buscador.css'
class Buscador extends Component {
    
    leerDatos=(e)=>{
        //termino de busqueda

        const termino = e.target.value;
        this.props.busqueda(termino)

    }
    
    
    render() {
        return (
            <div>
                <form className="buscador contenedor">
                    <input type="text" placeholder="Busqueda" onChange={this.leerDatos}/>
                </form>
                
            </div>
        );
    }
}

export default Buscador;