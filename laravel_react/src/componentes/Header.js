import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {auth} from './Auth';


class Header extends Component {

    
    

    componentWillMount(){
     
    
      
    }



    
    render() {
        
        return (
            <div>
                <h1>Laravel React Crud</h1>
                
                <div className="row mt-3
                ">
                    <div className="col-md-6">
                    <Link to="/">Regresar al inicio</Link>
                    </div>

                    <div className="col-md-6">
                        <Link to="/formulario">Crear Nuevo</Link>
                    </div>
>                </div>
            </div>
        );
    }
}

export default Header;