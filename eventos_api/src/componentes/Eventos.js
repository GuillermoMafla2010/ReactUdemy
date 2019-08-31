import React, { Component } from 'react';
import Evento from './Evento'
class Eventos extends Component {
    render() {
        return (
            <div>
                <div className="uk-child-width-1-3@s" uk-grid="true">
                {this.props.eventos.map((evento)=>{
                    return <Evento observable={evento} key={evento}/>})}
                </div>
            </div>
        );
    }
}

export default Eventos;