import React, { Component } from 'react';
import Header from './componentes/Header'
import Noticias from './componentes/Noticias'


import './css/index.css';

class App extends Component {
  state={
    noticias:[],
    
  }

  componentDidMount(){
    this.consultar_noticias()
  }

  

  consultar_noticias=(categoria='general')=>{ // si no existe categoria se asigna una por defecto para q no quede en undefined 
    let url=`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=968be8782b0147659e716e90a5908f3e`

    console.log(url)

    fetch(url).then(respuesta=>
      {return respuesta.json()})
      .then(datos=>{
        console.log(datos)
        this.setState({
          noticias:datos.articles
        })
      })
    }
     

    
  render() {
    return (
      <React.Fragment>
      <div className="container">
          <Header/>
          
      </div>

      <div className="container"> 
        <Noticias 
          noticias={this.state.noticias}
          categorias={this.consultar_noticias}/>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
