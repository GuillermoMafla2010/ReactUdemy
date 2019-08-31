import React, { Component } from 'react';
import {LaLigaContext} from './LaLiga'


class Equipo extends Component {
    render() {
        return (
           <LaLigaContext.Consumer>
               {(value)=>{
                  return Object.keys(value.state).map(
                      id=>{
                          return (
                              <li className="list-group-item" key={id}>
                              
                              <p className="m-0">
                              {value.state[id].nombre}
                                <span className="badge badge-warning ml-4">{value.state[id].titulos}</span>
                              </p>
                              <button className="btn btn-success" onClick={()=>{value.esCampeon(id)}}>Es Campeon</button>
                              </li>
                          )
                      }
                  )
               }}
           </LaLigaContext.Consumer>
        );
    }
}

export default Equipo;