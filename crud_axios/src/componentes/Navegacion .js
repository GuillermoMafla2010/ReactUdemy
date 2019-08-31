import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navegacion  extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/">Ir al inicio </Link>
                        </div>
                    <div className="col">
                    <Link to="/crear">Crear Nuevo </Link>
                        </div>

                </div>
            </div>
        );
    }
}

export default Navegacion ;