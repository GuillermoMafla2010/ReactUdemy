import React, { Component } from 'react';

class Formulario extends Component {
    state={
        datos_formulario:{}
    }
    nombre_evento=React.createRef()
    categoria_evento=React.createRef()
    
    
    
    mostrarOpciones=(key)=>{
        const categoria=this.props.eventos[key]
        const{id,name_localized}=categoria
        return <option key={id} value={id}>{name_localized}</option>
    }

    leer_formulario=(e)=>{
        e.preventDefault()
        const nombre_evento=this.nombre_evento.current.value,
                categoria_evento=this.categoria_evento.current.value

                const info_categorias={
                    nombre_evento,categoria_evento
                }
                this.setState({
                   info_categorias
                })

                this.props.recibe_categoria(info_categorias)

                
        
    }
    
    render() {
        const categorias=Object.keys(this.props.eventos)
        
        return (
            <div>
                <div className=".uk-column-1-3" uk-grid="true">
                <form onSubmit={this.leer_formulario}>
                    <div>
                        
                        <div className=".uk-column-1-2">
                            <input className="uk-input" type="text" placeholder="Ingresa ciudad o evento" ref={this.nombre_evento} />
                        </div>
                    </div>
                    <div>
                        <div className=".uk-column-1-2">
                            <select className="uk-select"ref={this.categoria_evento}>
                                {categorias.map(this.mostrarOpciones)}
                            </select>

                        </div>
                    </div>
                    <div>
                        <div className=".uk-column-1-2">

                            <button className="uk-button uk-button-primary">Buscar</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;