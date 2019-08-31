import React, { Component } from "react";

class Foto extends Component {
  render() {
    const resultados = this.props.foto;
    if (resultados.length === 0) {
      console.log("careverga");
    }
    console.log(resultados);
    return (
      <React.Fragment>
        <div className="col-6 col-sm-4 col-md-3 ">
          <div class="card-group">
            <div class="card">
              <img src={this.props.foto.largeImageURL} class="card-img-top" alt="..." />
              <div class="card-body">
             Me gusta : <badge className="badge badge-info">{this.props.foto.likes}</badge>
               
              </div>
              <div class="card-footer">
                <small class="text-muted"><button>Ver Foto Completa</button></small>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Foto;
