import React from 'react';
import { Route, Router } from 'react-router-dom';


//Componentes Auth0
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';


//Componentes propios
import Inicio from './Inicio'
import Productos from './Productos'
import Header from './Header'
import Nosotros from './Nosotros'
import Error from './Error'
import SingleProducto from './SingleProducto'
import infoProductos from '../datos/datos.json'
import Navegacion from './Navegacion'
import Contacto from './Contacto'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>

        <div className="contenedor">
        <Header/>
        <Navegacion auth={auth}  />
        <Route exact path="/productos" render={(props)=>(
                            <Productos 
                            //productos={resultado}
                            //busquedaProducto={this.busquedaProducto}
                            auth={auth} {...props}
                            
                            />)} />
                            <Route exact path="/header" component={Header}/>
                            
                            <Route exact path="/nosotros" component={Nosotros} />
                            <Route exact path="/contacto" component={Contacto}/>
                            <Route exact path="/producto/:id" render={(props)=>{
                                    let id=props.location.pathname.replace('/producto/','')
                                   console.log(props)
                                    return (
                                    <SingleProducto producto={this.state.productos[id]} 
                                    auth={auth} {...props}
                                    />
                                    
                                    )
                            }} />

                            


          
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
