import React, { Component } from 'react';

class Vista extends Component {
    render() {
        if(!this.props.estudiante_id) return null;

        const {nombre,apellido,correo,fecha_nacimiento,id}=this.props.estudiante_id
        console.log(this.props.estudiante_id);
        return (
            <div>
                aSasaSas
            </div>
        );
    }
}

export default Vista;