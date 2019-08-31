import React, { Component } from "react";
import axios from 'axios'
import Criptomoneda from "./Criptomoneda";
import Error from './Error';
class Formulario extends Component {
    state={
        cryptomonedas:[],
        moneda:'',
        criptomoneda:'',error:false
    }

    async componentWillMount(){
        const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        await axios.get(url).then(respuesta=>{this.setState({
            cryptomonedas:respuesta.data.Data
        
        })})
        //console.log(this.state.cryptomonedas)
  
    }

    //Se ejecuta cada que un usuario elige una opcion del select
    obtenerValor=(e)=>{
      console.log(e.target.name)
      const {name,value}=e.target

      this.setState({
        [name]:value  // que propiedad se va a actualizar y con que se va a actualizar
      })
    }
    
    //Validar que el usuario elija monedas
    cotizarmoneda=(e)=>{
      e.preventDefault()
      const {moneda,criptomoneda}=this.state
      //Validar que  haya algo elegido
      if(moneda===''||criptomoneda===''){
        this.setState({
          error:true
        },()=>{
          setTimeout(()=>{
            this.setState({
              error:false
            })
          },3000);
        })
      }

      //crear el objeto
        const cotizacion={
          moneda,criptomoneda
        }


      //enviar los datos al App.js

      this.props.cotizarCriptomoneda(cotizacion);
    }
    render() {
      const mensaje=(this.state.error)?<Error mensaje="Ambos campos son obligatorios"/>:''
    return (
      <div>
        <form onSubmit={this.cotizarmoneda}>
        {mensaje}
          <div className="row">
            <label>Elige tu Moneda</label>
            <select className="u-full-width" name="moneda" onChange={this.obtenerValor}>
              <option value="">Elige tu moneda</option>
              <option value="USD">Dolar Estadounidense</option>
              <option value="MXN">Peso Mexicano</option>
              <option value="GBP">Libras</option>
              <option value="EUR">Euros</option>
            </select>
          </div>

          <div className="row">
            <div>
              <label>Elige tu Criptomoneda</label>
              <select className="u-full-width" name="criptomoneda" onChange={this.obtenerValor}>>
                <option value="">Elige tu moneda</option>
                {Object.keys(this.state.cryptomonedas).map(key=>(
                    <Criptomoneda
                        key={key}
                        criptomoneda={this.state.cryptomonedas[key]}/>
                ))}
              </select>
            </div>
          </div>
          <input
            className="button-primary u-full-width"
            type="submit"
            value="Cotizar"
          />
        </form>
      </div>
    );
  }
}

export default Formulario;
