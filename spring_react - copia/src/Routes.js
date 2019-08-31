import axios from 'axios'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import React, { Component } from 'react';
import Navegacion from './Navegacion'
import Crear from './Crear'
import Estudiantes from './Estudiantes'
import SingleEstudiante from './SingleEstudiante'

class Routes extends Component {
    
    state={
        estudiantes:[]
    }

    componentDidMount(){
        this.obtenerEstudiantes();
    }

    obtenerEstudiantes=(estudiantes)=>{
        axios.get("http://localhost:81/apirest_php/apirestfull/public/api/estudiantes").then(
            respuesta=>{
                

                if(respuesta.status===200){
                    let id={id:respuesta.data.id}

                    const objeto=Object.assign({},id,respuesta.data.estudiantes)

                    this.setState(prevState=>({
                        estudiantes:[...prevState.estudiantes,objeto]
                    }))
                }
                console.log(respuesta)
                this.setState({
                estudiantes:respuesta.data
            })}
            
        )
    }
    
    enviarFormulario=(datos)=>{
        const url="http://localhost:81/apirest_php/apirestfull/public/api/estudiantes/";
        axios.post(url,{datos})
        .then(respuesta=>
            this.setState({
                estudiantes:respuesta.data
            })
        )

        
    }
    
    render() {
        
        return (
            <div>
                <BrowserRouter>
                

                <Navegacion/>



                    <Switch>

                        <Route exact path="/estudiantes" render={()=><Estudiantes estudiantes={this.state.estudiantes} />}/>
                        <Route exact path="/crear" render={()=>(<Crear enviarFormulario={this.enviarFormulario}/>)}/>
                        <Route exact path="/editar/:id" render={(props)=>{
                            let id =props.location.pathname.replace('/editar/','')
        return <SingleEstudiante estudiante={this.state.estudiantes[id-1]} />
    }}/>
                    </Switch>

                
                
                
                
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;