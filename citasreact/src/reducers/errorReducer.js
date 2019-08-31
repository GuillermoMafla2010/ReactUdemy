import {VALIDAR_FORMULARIO,MOSTRAR_ERROR} from '../actions/types';

//state inicial

const initialState={
    error:false
}

export default function(state=initialState,action){
    switch(action.type){
        case VALIDAR_FORMULARIO:return{
            error:action.payload
        }
        default: return state
    }
}