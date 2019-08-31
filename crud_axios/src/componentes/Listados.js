import React, { Component } from 'react';
import Listado from './Listado'
class Listados extends Component {
    render() {
        return (
            <div className="container ">
                {Object.keys(this.props.productos).map(productos=><Listado productos={this.props.productos[productos]} 
                key={productos} eliminarPost={this.props.eliminarpost}/>)}
            </div>
        );
    }
}

export default Listados;