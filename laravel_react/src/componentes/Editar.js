import React, { Component } from 'react';

class Editar extends Component {
    nombre=React.createRef();
    apellido=React.createRef();
    edad=React.createRef();
    correo=React.createRef();
    fecha=React.createRef();
    
    formulario=(e)=>{
        e.preventDefault();
 
        const datos={
            id:this.props.estudiante_id.id,
            nombre:this.nombre.current.value,
             apellido:this.apellido.current.value,
             edad:this.edad.current.value,
             email:this.correo.current.value,
             fecha_nacimiento:this.fecha.current.value
        }

        this.props.editarFormulario(datos)
    }
    
    
    render() {
        if(!this.props.estudiante_id) return null;
        const {nombre,apellido,email,fecha_nacimiento,edad}=this.props.estudiante_id
        return (
            <div>
                            Editar

                <form onSubmit={this.formulario}> 
                Nombre:<input type="text" ref={this.nombre} defaultValue={nombre}/><br/>
                Apellido:<input type="text"ref={this.apellido} defaultValue={apellido}/><br/>
                Edad:<input type="text"ref={this.edad} defaultValue={edad}/><br/>
                Fecha:<input type="text"ref={this.fecha} defaultValue={fecha_nacimiento}/><br/>
                Correo:<input type="text"ref={this.correo} defaultValue={email}/><br/>
                <input type="submit" value="Enivar"/>
                </form>
            </div>
        );
    }
}

export default Editar;