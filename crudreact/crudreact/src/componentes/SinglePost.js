import React, { Component } from 'react';
class SinglePost extends Component {

     mostrarPost = (props) => {
          
          const {nombre, apellido, userId } = this.props.post;
          console.log(nombre)
          return (
               <React.Fragment>
                    <h1>{nombre}</h1>
                    <p>Autor: {userId}</p>
                    {apellido}
               </React.Fragment>
          )
     }

     render() { 

          return ( 
               <div className="col-12 col-md-8">
                    {this.mostrarPost(this.props)}
               </div>
          );
     }
}
 
export default SinglePost;