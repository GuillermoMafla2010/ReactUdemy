import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Inicio from './Inicio'
import Productos from './Productos'
import Header from './Header'
import Nosotros from './Nosotros'
import Error from './Error'
import SingleProducto from './SingleProducto'
import infoProductos from '../datos/datos.json'
import Navegacion from './Navegacion'
import Contacto from './Contacto'
class Router extends Component {
    
    state={
        productos:[],
        termino_busqueda:''
    }

    componentWillMount(){
        this.setState({
            productos:infoProductos
        })
    }
    
    busquedaProducto=(busqueda)=>{
        if(busqueda.length>1){
            this.setState({
                termino_busqueda:busqueda
            })
        }else{
            this.setState({
                termino_busqueda:''
            })
        }
    }
    
    render() {
        let productos=[...this.state.productos] // saca una copia del state
        let busqueda=this.state.termino_busqueda
        let resultado;
        if(busqueda!==''){
            resultado=productos.filter(producto=>(
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase())!==-1
            ))}
            else{
                resultado=productos
            }

        return (
            <React.Fragment>
            <BrowserRouter>
            <div>
                <Header/>
                <div className="contenedor">
                <Navegacion/>
                </div>
                <Switch>

                            <Route exact path="/" render={()=>(<Productos productos={resultado}
                            
                            busquedaProducto={this.busquedaProducto}
                            
                            />)} />
                            <Route exact path="/producto/:id" render={(props)=>{
                                    let id=props.location.pathname.replace('/producto/','')
                                   console.log(props)
                                    return (
                                    <SingleProducto producto={this.state.productos[id]
                                    } 
                                    />
                                    
                                    )
                            }} /> 
                            <Route exact path="/header" component={Header}/>
                            <Route exact path="/nosotros" component={Nosotros} />
                            <Route exact path="/contacto" component={Contacto}/>
                            <Route  path component={Error}/>
                 
                        
                    

                </Switch>
            
                </div>
            </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Router;