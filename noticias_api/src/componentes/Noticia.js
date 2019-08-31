import React from "react";
import '../css/index.css';
class Noticia extends React.Component {
  render() {
    
    const status=this.props.noticia.author
    const title=this.props.noticia.title
    const contenido=this.props.noticia.content
    const foto=this.props.noticia.urlImage
    //console.log(status)

    
    return (
      
        <div className="row">
          
          <div className="col-md-4">
                
            {status}{title}


          </div>
         
        </div>
      
    )
  }
}

export default Noticia;
