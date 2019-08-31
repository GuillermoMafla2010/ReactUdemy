import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Nosotros from './Nosotros'
import Productos from './Productos'
import Contacto from './Contacto'
import './Navegacion.css'

class Navegacion extends Component {


    cerrarSesion=()=>{
        this.props.auth.logout()
    }

    IniciarSesion =()=>{
        this.props.auth.login()
    }
    render() {

        const {isAuthenticated} = this.props.auth;
        let resultado;

        if(isAuthenticated()){
            resultado=<a onClick={this.cerrarSesion}>Cerrar Sesion</a>
        }else{
            resultado=<a onClick={this.IniciarSesion}>Iniciar Sesion</a>
        }

        return (
            <React.Fragment>
                    <div className="container">
                <div className="navegacion">
           <NavLink to={ '/nosotros'} activeClassName="activo">Nosotros</NavLink>
           <NavLink to={ '/productos'} activeClassName="activo"> Productos</NavLink>
           <NavLink to={ '/contacto'} activeClassName="activo">Contacto</NavLink>
{resultado}
            

           
           </div>
           </div>
           </React.Fragment>
        );
    }
}

export default Navegacion;