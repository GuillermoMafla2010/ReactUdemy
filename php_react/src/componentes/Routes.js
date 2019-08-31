import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './Header'
import Estudiante from './Estudiante'
import Estudiantes from './Estudiantes'
import Vista from './Vista'
import axios from 'axios'
class Routes extends Component {
    
    
    state={
        estudiantes:[]
    }
    componentDidMount(){
        this.obtenerEstudiantes();
        
    }
    obtenerEstudiantes=(datos)=>{
        axios.get("http://localhost:8080/ingreso/estudiantes")
        .then(respuesta=>
            //console.log(respuesta.data)
        this.setState({
            estudiantes:respuesta.data
        })
        )
    }
    
    render() {
        return (
            <div>
                <BrowserRouter>
                        <Header/>
                    <Switch>

                    <Route exact path="/" render={()=>(<Estudiantes lista={this.state.estudiantes}/>)}/>
                    <Route exact path="/ver/:id" render={(props)=>{
                            let id=props.location.pathname.replace("/ver/","")
                            return (<Vista estudiante_id={this.state.estudiantes[id-1]}/>)
                        }}  />

                    </Switch>
                
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;