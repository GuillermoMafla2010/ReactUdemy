import React, { Component } from 'react';
import Foto from './Foto'
class Galeria extends Component {
    render() {
        return (
            <div className="col-12 p-5 row">
                {Object.keys(this.props.galeria).map(
                    foto=>(<Foto foto={this.props.galeria[foto]} key={foto} />)
                )}
            </div>
        );
    }
}

export default Galeria;