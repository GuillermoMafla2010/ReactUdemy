import React from "react";

class Respuesta extends React.Component {

  mostrarResultado=()=>{

    //obtner los datos de la consulta
    const name=this.props.datos_api.name
    const main=this.props.datos_api.main
    const weather=this.props.datos_api.weather
    
    if(!name || !main || !weather ){
      return null
    }
    const icono=`http://openweathermap.org/img/w/${weather[0].icon}.png`;
    const kelvin=273.15


    return(
    
      
          
        
        <div>

        <div className="card bg-light mb-3" >
          <div class="card-header">El clima en {name}</div>
          <div class="card-body">
            
            <h5 class="card-title">Temperatura </h5><img src={icono} alt=""/>
            <p class="card-text">{main.temp-kelvin}</p>
          </div>

        </div>
      </div>
    
      
      )
    
  }

  render() {
      const error=this.props.mensaje_error === true ? <div class="alert alert-danger">Faltan campos restantes</div> : ''
      const desconocido=this.props.codigo === '404' ? <div class="alert alert-danger">No existe la ciudad</div> : ''
    return (
      <div>
        {error} {desconocido}
          {this.mostrarResultado()}
          
      </div>
    );
  }
}

export default Respuesta;
