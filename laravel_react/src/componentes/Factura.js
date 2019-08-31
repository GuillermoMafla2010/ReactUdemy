import React, { Component } from 'react';


  




class Factura extends Component {
    detalles=React.createRef();

    formulario=(e)=>{
        e.preventDefault();
        

        const datos={
            detalle:this.detalles.current.value,
            estudiante_id:this.props.estudiante_id.id
        }

        console.log(datos);

        this.props.datosfactura(datos)

    }
    
    render() {
        if(!this.props.estudiante_id) return null;
        const id=this.props.estudiante_id.id
       
        console.log(id)
        return (
            <div>
                
         
                    Creando la Factura

                    <form onSubmit={this.formulario}>

                    Descripcion <input type="text" ref={this.detalles}/>
                    <input type="submit" value="Enviar" />
         
                    </form>
         
         
            </div>
        );
    }
}

export default Factura;         