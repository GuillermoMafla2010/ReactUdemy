import {VALIDAR_FORMULARIO,MOSTRAR_ERROR} from '../actions/types';

export const validarformulario=(estado)=>{

    return{type:VALIDAR_FORMULARIO,
        payload:estado}
    
}