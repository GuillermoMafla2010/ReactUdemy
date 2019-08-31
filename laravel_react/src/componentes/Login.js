import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import Header from './Header'

import Auth from './Auth'
import { setTimeout } from 'timers';

class Login extends Component {
    
    nombre=React.createRef();
    password=React.createRef();

    state={
        estado:false
    }

    

    componentWillMount(){
      
        if(localStorage.length>0){
            this.setState({
                estado:true
            
            })
            
        }else{
            this.setState({
                estado:false
            })
        }

        if(localStorage.length>0){
            swal.fire('Ya has iniciado sesion')
            this.props.history.replace("/");
        }
        
        //setTimeout(()=>console.log(this.state.estado),100)
        
    }

   

   

    cerrarSesion=()=>{
        localStorage.clear()
        this.setState({
            estado:false
        })
    }

    enviarlogin=(e)=>{
            e.preventDefault();
            const datos={
                email:this.nombre.current.value,
                password:this.password.current.value
            }
            //console.log(datos)

            axios.post(`http://192.168.100.54:81/apirest_php/apirestfull/public/api/user/login`,datos).then(
                respuesta=>{
                    //console.log(respuesta)
                    if(respuesta.data.success===true){
                        swal.fire(
                            'Bienvenido',
                            'Ingreso correcto al sistema',
                            'success'
                          )
                   //setTimeout((this.props.history.push("/")),20000)     
                   ;
                localStorage.setItem("key",JSON.stringify(respuesta.data.data));  
                this.props.history.push("/")   
                            this.setState({
                                estado:true
                            })
                            console.log(this.state.estado)
                            
                    }else{
                        swal.fire(
                            'Error al ingresar',
                            'Usuario o clave incorrectas',
                            'error'
                          )

                          
                    }

                    
                }
              
            )
    }
    
    render() {
const style={
    visibility:'hidden'
}
   

        
        return (
            <div>
               
                Ingreso al Sistema
               
                <form onSubmit={this.enviarlogin}>
                <label >Nombre</label> <input type="text"  ref={this.nombre}/> <br/>
                <label>Contraseña</label> <input type="password" ref={this.password}/><br/>

              <input type="submit"  value="Enviar"/> 
              
                </form>
                
               
            </div>
            
        );
    }
    
}


export default Login;

