import React, { Component } from 'react';

class Evento extends Component {
    render() {
       console.log(this.props.observable.name)
        return (
            <div>
                <div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                    <img src={this.props.observable.logo.original.url}/>
                        <h3 class="uk-card-title">{this.props.observable.name.text}</h3>
                        <p>{this.props.observable.description.text}</p>
                        <button><a href={this.props.observable.url}>Ir al enlace</a></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Evento;