import React, { Component } from 'react';

//importacion para rutas
import {BrowserRouter,Switch,Route} from 'react-router-dom';

//importaciones de componentes
import Header from './componentes/Header'
import EditarProducto from './componentes/EditarProducto';
import NuevoProducto from './componentes/NuevoProducto';
import Productos from './componentes/Productos'

//importaciones de Redux
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
<BrowserRouter>
<div className="App">
        <Header ></Header>
      </div>
      
      <Switch>
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/nuevo" component={NuevoProducto} />
        <Route exact path="/editar/:id" component={EditarProducto} />
      </Switch>

</BrowserRouter>
      
      </Provider>
    );
  }
}

export default App;
