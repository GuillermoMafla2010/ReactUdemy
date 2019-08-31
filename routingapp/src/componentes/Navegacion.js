import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Nosotros from './Nosotros'
import Productos from './Productos'
import Contacto from './Contacto'
import './Navegacion.css'

class Navegacion extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="container">
                <div className="navegacion">
           <NavLink to={ '/nosotros'} activeClassName="activo">Nosotros</NavLink>
           <NavLink to={ '/'} activeClassName="activo"> Productos</NavLink>
           <NavLink to={ '/contacto'} activeClassName="activo">Contacto</NavLink>
           </div>
           </div>
           </React.Fragment>
        );
    }
}

export default Navegacion;