import React, { Component } from 'react';
import Estudiante from './Estudiante';
import Formulario from './Formulario';
import Pagination from "react-js-pagination";
import axios from 'axios';
class Estudiantes extends Component {
    
    
    

    
    
    
    render() {
        return (
            <React.Fragment>
            <div className="container"> 
                {Object.keys(this.props.lista).map(
                    estudiante=>
                    <Estudiante estudiante={this.props.lista[estudiante]}
                    key={estudiante}
                    eliminar={this.props.eliminar}
                    //handlePageChange={this.props.handlePageChange}
                    />
                )}

    

            </div>
           
            </React.Fragment>
        );
    }
}

export default Estudiantes;