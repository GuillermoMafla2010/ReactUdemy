import React, { Component } from "react";
import './Header.css'
class Editar extends Component {
    
      //crear Ref
    
      titleref = React.createRef()
      bodyref=React.createRef()
    
    
      leerFormulario=(e)=>{
        e.preventDefault();
    
        //leer los refs
        const title=this.titleref.current.value,
              body=this.bodyref.current.value
        
              
    
        const info_post={
            title,body,userId:1,id:this.props.post.id
        }
        
        this.props.enviarFormulario(info_post)
        
      }
  
  
    render() {
    if (!this.props.post) return null;

    const { title, body,id } = this.props.post;
    console.log(id);
    return (
      <div className="container margen">
        <div className="card">
          <div className="card-body">
                <form onSubmit={this.leerFormulario}>
                    <label className="text-center" >Titulo</label>
                    <input type="text" className="form-control" ref={this.titleref} defaultValue={title}/>

                    <label className="text-center">Descripcion</label>
                    <input type="text" className="form-control" ref={this.bodyref} defaultValue={body}/>

                <input type="submit" className="btn btn-success"></input>    
                </form>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Editar;
