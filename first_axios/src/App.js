import React, { Component } from 'react';
import imagen from './cryptomonedas.png'
import Formulario from './componentes/Formulario'
import './App.css';
import axios from 'axios'
import Resultado from './componentes/Resultado'

import Spinner from './componentes/Spinner'





class App extends Component {

  state={
    resultado:{},
    monedaSeleccionada:'',
    criptoSeleccionda:'',
    cargando:false
  }

  cotizarCriptomoneda=(cotizacion)=>{
      //obtener los valores
      const {moneda,criptomoneda}=cotizacion
      //realizar la consulta con axios a la api
      const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      axios.get(url).then(
        respuesta=>{
         // console.log(respuesta.data.DISPLAY)
          this.setState({
            resultado:respuesta.data.DISPLAY[criptomoneda][moneda],
            cargando:true
          },()=>{
            // 3 segundos despues cambia a false el cargando que se encuentra en state
              setTimeout(()=>{
                this.setState({
                  cargando:false
                })
              },3000)
          })
        }
      )
  }



  render() {
    const resultado = (this.state.cargando)?<Spinner/>: <Resultado resultado={this.state.resultado}/>
    return (
      <React.Fragment>
        

        <div className="container">
          <div className="row">
            <div className="one-half column">
                <img src={imagen} className="logotipo" alt="imagen"/>
            </div>

            <div className="one-half column">
            <h1>Cotiza criptomonedas al instante</h1>
                <Formulario cotizarCriptomoneda={this.cotizarCriptomoneda}/>
               
                {resultado}
            </div>
            
          </div>
        </div>

      

      </React.Fragment>
    );
  }
}

export default App;
