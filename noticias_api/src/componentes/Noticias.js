import React from 'react'
import Noticia from './Noticia'


class Noticias extends React.Component{

    

    categoria=React.createRef()

    leer_categoria=(e)=>{
        e.preventDefault()
        const info_categoria = 
            this.categoria.current.value
        

       

        this.props.categorias(info_categoria)


    }


render(){

    return (
        <React.Fragment>
            <form onSubmit={this.leer_categoria}>

                <select ref={this.categoria}>

                    <option value="science">Ciencia</option>
                    <option value="business">Negocios</option>
                    <option value="sports">Deportes</option>
                    <option value="technology">Tecnologia</option>
                </select>

                <input type="submit" value="Buscar"></input>
            </form>
            <p>Ultimas Noticias</p>
            {this.props.noticias.map((datos)=>{
                return <Noticia noticia={datos}/>
            })}
            

        </React.Fragment>
    )
}


}

export default Noticias