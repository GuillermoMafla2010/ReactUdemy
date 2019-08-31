import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <p className="error"> {this.props.mensaje}</p>
        );
    }
}

export default Error;