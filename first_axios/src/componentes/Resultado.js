import React, { Component } from 'react';

class Resultado extends Component {

    
    render() {
        if(Object.entries(this.props.resultado).length===0) return null //verifica si el objeto esta vacio y hasta aqui llega la ejecucion del resultado
        return (
            <div className="resultado">
                <h2>Resultado</h2>
                <p className="precio">El precio del Bitcoin es <span>{this.props.resultado.PRICE}</span></p>
                <p className="precio">El precio mas alto del dia <span>{this.props.resultado.HIGHDAY}</span></p>
                <p className="precio">El precio mas bajo del dia <span>{this.props.resultado.LOWDAY}</span></p>
                
            </div>
        );
    }
}

export default Resultado;