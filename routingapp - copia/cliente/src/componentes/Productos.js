import React, { Component } from 'react';
import Producto from "./Producto"
import Buscador from './Buscador'
import SingleProducto from './SingleProducto'
import axios from 'axios';

class Productos extends Component {
    state={
        productos:[],
        termino_busqueda:''
    }

    componentWillMount(){
        this.queryAPI();
    }

    queryAPI=()=>{
        console.log(this.props.auth.getAccessToken())
        const {getAccessToken}=this.props.auth
        const headers={'Authorization':`Bearer ${getAccessToken()}`}

        const url=`http://localhost:5000/productos`;

        console.log("Peticion al servidor"+ headers )

        return axios.get(url,{headers}).then(respuesta=>
            {
                    this.setState({
                        productos:respuesta.data
                    })
            }
            )
    }


    login=()=>{
        this.props.auth.login();
    }

    busquedaProducto=(busqueda)=>{
        console.log(busqueda)
        if(busqueda.length>1){
                //obtenr copia del state
        let productos=[...this.state.productos];
      
        let resultado;

        
            resultado=productos.filter(producto=>(
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase())!==-1
            ))


            this.setState({
                termino_busqueda:busqueda,
                productos:resultado
            })
        }else{
            this.setState({
                termino_busqueda:''
            })
        }
    }

    render() {
        
        const {isAuthenticated}=this.props.auth;

        
        
        return (
            <div className="productos">
                
                    {
    isAuthenticated()&&(
        <div className="contenedor-boton">
            <h2>Nuestros Productos</h2>
                <Buscador
                busqueda={this.busquedaProducto}/>
                    <ul className="lista-productos">
                    {Object.keys(this.state.productos).map(producto=>(
                            <Producto informacion={this.state.productos[producto]}
                            key={producto}
                            />

                           

                        ))}
                    </ul>
            
        </div>
    ) 
}
                   

                    {
                        !isAuthenticated()&&(
                            <div className="contenedor-boton">
                                <p>Para ver el contenido debes estat autenticado</p>
                                <a className="boton" onClick={this.login}>Iniciar Sesion</a>
                            </div>
                        )
                    }


            </div>
        );
    }
}

export default Productos;