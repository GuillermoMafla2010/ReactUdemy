import React, { Component } from "react";
import './Header.css'
import {Link} from 'react-router-dom'

class SingleLista extends Component {
  render() {
    const { title, id } = this.props.producto_id;
    const style = "width: 18rem;";
    return (

        <div className="container margen">
        <div className="card">
        <div className="card-header">
        {title}
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">{this.props.producto_id.body}</p>
          <button className=""><Link to={"/"}>Ir al inicio</Link></button>
        </div>
      </div>
      </div>
    );
  }
}

export default SingleLista;
