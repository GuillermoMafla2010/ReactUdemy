import React, { Component } from 'react';

class Vista extends Component {
   state={
       estudiante:[]
   }
   componentWillMount(){


    console.log(this.props)
       
    this.setState({
        estudiante:this.props.estudiante_id
    })
        
   }
  
   
    render() {
        if(!this.props.estudiante_id) return null;
        console.log(this.props.estudiante_id);
        return (
            <div>
                {this.props.estudiante_id.nombre} {this.props.estudiante_id.apellido}
                <img src={`http://localhost:81/apirest_php/apirestfull/storage/app/images/${this.props.estudiante_id.foto}.jpg`} />
            </div>
        );
    }
}

export default Vista;