import React, { Component } from 'react';
import Estudiante from './Estudiante'
class Estudiantes extends Component {
    render() {
        return (
            <div className="container"> 
                {Object.keys(this.props.lista).map(
                    estudiante=>
                    <Estudiante estudiante={this.props.lista[estudiante]}
                    key={estudiante}
                    
                    />
                )}
            </div>
        );
    }
}

export default Estudiantes;