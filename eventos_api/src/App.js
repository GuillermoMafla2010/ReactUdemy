import React, { Component } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Eventos from './componentes/Eventos'
import './css/App.css';

class App extends Component {
  state={
    categorias:[],
    eventos:[]
  }

  componentDidMount(){
    this.consultar_evento()
  }

  consultar_evento=()=>{
    let url = `https://www.eventbriteapi.com/v3/categories/?token=X5DJHVUPVD6VL6WXKEJP&locale=es_ES`

    fetch(url).then(
      respuesta=>{return respuesta.json()}
    ).then(
      datos=>{
        //console.log(datos)
        this.setState({
          categorias:datos.categories
        })
        //console.log(this.state.categorias)
      }
    )
  }


    recibe_categorias=(dato_categoria)=>{
      //let url = `https://www.eventbriteapi.com/v3/categories/${dato_categoria.categoria_evento}/?token=X5DJHVUPVD6VL6WXKEJP&locale=es_ES`
      let url= `https://www.eventbriteapi.com/v3/events/search/?q=${dato_categoria.nombre_evento}&categories=${dato_categoria.categoria_evento}&token=X5DJHVUPVD6VL6WXKEJP&locale=es_ES`
      console.log(url)
    fetch(url).then(
      respuesta=>{return respuesta.json()}
    ).then(
      datos=>{
        //console.log(datos)
        this.setState({
          eventos:datos.events
        })
        console.log(this.state.eventos)
      }
    )
    }

  render() {
    return (
      <React.Fragment>
      <div className="App">
        <Header/>
        
      </div>
      <div className="uk-container uk-margin">

        <Formulario
          eventos={this.state.categorias}
          recibe_categoria={this.recibe_categorias}
        />

      </div>


      <div className="uk-container uk-margin">
        <Eventos
        
          eventos={this.state.eventos}
        />

      
      </div>
      </React.Fragment>
    );
  }
}

export default App;
