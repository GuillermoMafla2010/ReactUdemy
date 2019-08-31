import React from "react";

import Respuesta from "./Respuesta";
class Formulario extends React.Component {
  state = {
    error: false,
    datos: {},
    resultado: {},
    cod:''
  };
  pais = React.createRef();
  ciudad = React.createRef();

  componentDidUpdate(preProps, prevState) {
    if (prevState.datos !== this.state.datos) {
      this.consultar_api();
    }
  }

  consultar_api = () => {
    const { ciudad, pais } = this.state.datos;
    //console.log(ciudad,pais)
    const appid = "8380675966aa66b4f1090f136741dfce";
    const EndPoint = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;
    //console.log(EndPoint)

    //query con fetch api
    fetch(EndPoint)
      .then(respuesta => {
        return respuesta.json();
        
      })
      .then(datos => {
        
        
        this.setState({ resultado: datos });
        console.log(datos);
        const cod = this.state.resultado.cod
        console.log(cod)
        this.setState({cod:cod})
        
      });
  };
  datos_clima = e => {
    e.preventDefault();

    const ciudad = this.ciudad.current.value,
      pais = this.pais.current.value;

      

    if (ciudad === "" || pais === "") {
      this.setState({
        error: true
      });
    } else {
      const datos_clima = {
        ciudad,
        pais
      };
      //e.target.reset()
      this.props.datos_clima(datos_clima);
      this.setState({
        error: false,
        datos: datos_clima
      });

      
      
    }
  };
  render() {
    const mensaje = this.state.error;
    return (
      <div>
        <div className="contenedor-form">
          <div className="container">
            <form onSubmit={this.datos_clima}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input
                  id="ciudad"
                  type="text"
                  autoComplete="off"
                  ref={this.ciudad}
                />
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.pais}>
                  <option value="" defaultValue>
                    Elige un pais
                  </option>
                  <option value="AR">Argentina</option>
                  <option value="MX">Mexico</option>
                  <option value="ES">España</option>
                  <option value="EC">Ecuador</option>
                  <option value="CO">Colombia</option>
                  <option value="PE">Peru</option>
                </select>
                <label htmlFor="pais">Pais:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large yellow accent-4"
                  value="Buscar"
                />
              </div>
            </form>
          </div>
        </div>

        <Respuesta
          mensaje_error={this.state.error}
          datos_api={this.state.resultado}
          codigo={this.state.cod}
        />
      </div>
    );
  }
}

export default Formulario;
