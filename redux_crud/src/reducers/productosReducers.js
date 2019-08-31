import {MOSTRAR_PRODUCTOS,ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO,MOSTRAR_PRODUCTO} from '../actions/types'

//cada reducer tiene su propio state

const initialState={
    productos:[]
}


export default function (state=initialState,action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case MOSTRAR_PRODUCTOS:
            return{
                ...state,
                   productos:action.payload 
            }

        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                productos:state.productos.filter(producto=>producto.id!==action.payload)
            }

        case AGREGAR_PRODUCTO:
        return{
            ...state,
            productos: state.productos
        }

        case MOSTRAR_PRODUCTO:
        return{
            ...state,
            productos:action.payload
        }

            default:return state;
    }
}