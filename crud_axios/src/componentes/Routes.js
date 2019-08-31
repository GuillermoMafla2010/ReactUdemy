import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './Header';
import Navegacion from './Navegacion '
import Crear from './Crear'
import './Header.css'
import axios from 'axios';
import Listados from './Listados'
import Listado from './Listado'
import Editar from './Editar'
import SingleLista from './SingleLista'
import swal from 'sweetalert2'

class Routes extends Component {
   state={
       productos:[]
   }
   
   componentWillMount(){
    this.obtenerResultados();
   }

   obtenerResultados=(datos)=>{
     axios.get("https://jsonplaceholder.typicode.com/posts").then(
         respuesta=>
         this.setState({
                productos:respuesta.data
         })
     )
   }

   eliminarPost=(id)=>{
        console.log("EL post a eliminar es : "+id)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        
            .then(respuesta=>{
                    if(respuesta.status===200){
                        
                        const posts=[...this.state.productos]
                        let resultado=posts.filter(post=>(post.id !==id))
                        this.setState({
                            productos:resultado
                        })
                    }
            })
        
   }

   enviarFormulario=(datos)=>{
       //console.log(datos)
       axios.post('https://jsonplaceholder.typicode.com/posts',{datos}).then(
           respuesta=>{
               if(respuesta.status===201){
                    
                    let id = {id:respuesta.data.id}
                    
                   console.log(id)
                   
                   const objeto_unido=Object.assign({},id,respuesta.data.datos)

                   console.log(objeto_unido)

                  this.setState(prevState=>({
                      productos:[...prevState.productos,objeto_unido]
                  }))
               }
           }
       )
   }

   editarFormulario=(datos)=>{
      axios.put(`https://jsonplaceholder.typicode.com/posts/${datos.id}`,{datos}).then(
          respuesta=> 
    {if(respuesta.status===200){
       // this.obtenerResultados(); //Suficiente en una api propia
       let post_id=respuesta.data.id
       const posts=[...this.state.productos]
       const post_editar=posts.findIndex(post=>post_id===post.id)
        posts[post_editar]=datos
       this.setState({
           productos:posts
       })
    }}
          
      )
   }
    render() {
        return (
            <div>
                <BrowserRouter>

                        <div className="container text-center">
                            <Header/>
                        </div>

                        <div className="container text-center margen">
                            <Navegacion/>
                        </div>
                    <Switch>

                            <Route exact path="/" render={()=>(<Listados productos={this.state.productos}
                            eliminarpost={this.eliminarPost}/>)}/>
                            <Route exact path="/crear" render={()=>(<Crear enviarFormulario={this.enviarFormulario} />)} />
                            <Route exact path ="/post/:id" render={(props)=>{
                                let id = props.location.pathname.replace('/post/','')
                               
                                return(<SingleLista producto_id={this.state.productos[id-1]}
                                
                               />)
                               
                            }} />

                                <Route exact path ="/editar/:id" render={(props)=>{
                                let id = props.location.pathname.replace('/editar/','')
                               
                                return(<Editar post={this.state.productos[id-1]} enviarFormulario={this.editarFormulario}
                                
                               />)
                               
                            }} />

                    </Switch>
                
                
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;