import React, { Component } from 'react';
import Router from './componentes/Router'
import {makeMainRoutes} from './componentes/routes';
import './App.css';
const routes=makeMainRoutes();



class App extends Component {
  render() {
    return (
      <div className="container App">
        {routes}
      </div>
    );
  }
}

export default App;
