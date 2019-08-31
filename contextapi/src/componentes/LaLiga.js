import React from 'react'
//crear el context

const LaLigaContext =React.createContext()
export {LaLigaContext};
class LaLiga extends React.Component{

    state={
        equipos:[
            {nombre:'Barcelona',
            titulos:25},{
                nombre:'Real Madrid',
                titulos:35
            },{
                nombre:'La Coruña',
                titulos:1
            }
        ],
        userLogin:false
    }


    render(){
        return(
            <React.Fragment>

                <LaLigaContext.Provider value={{
                    state:this.state.equipos,
                    esCampeon:(id)=>{
                        const equipos=[...this.state.equipos]
                        //console.log(equipos)
                        equipos[id].titulos=equipos[id].titulos+1
                        this.setState({
                            state:equipos
                        })
                    }
                }}>

                {this.props.children}

                </LaLigaContext.Provider>
            </React.Fragment>
        )
    }

}

export default LaLiga