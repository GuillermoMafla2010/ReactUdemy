import React, { Component } from 'react';
import Formulario from './componentes/Formulario'
import Galeria from './componentes/Galeria'
import Pagination from "react-js-pagination";
import './App.css';

class App extends Component {
    state={
      resultado:[],
      activePage: 15,
      totalPagina:''
    }


  recibeImagen=(datos)=>{
    console.log(datos)
    fetch(`https://pixabay.com/api/?key=11945757-9dfd27a5ea853d587e395a513&q=${datos}`).then(
      respuesta=>{
        return respuesta.json()
      }
    ).then(datos=>{
      console.log(datos)
      this.setState({
        resultado:datos.hits
        
      })

      
      
    })
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
  
  render() {
    return (
      <React.Fragment>
     
     <div className="App">
          <Formulario enviarimagen={this.recibeImagen}/>
      </div>

      <div className="container ">
        <Galeria galeria={this.state.resultado}/>
      </div>
      <div>
      <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
