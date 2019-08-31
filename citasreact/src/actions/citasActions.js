import {MOSTRAR_CITAS,AGREGAR_CITA,BORRAR_CITA} from '../actions/types';


//Para leer las citas
export const obtenerCitas=()=>{
    return{
        type:MOSTRAR_CITAS
    }  // cierre arrow function
}  // cierre arrow function

//Inserta las citas desde el formulario

//el cita viene desde el formulario que se encuentra en AgregarCita.js
export const agregarcita=(cita)=>{

    return {
        type:AGREGAR_CITA,
        payload:cita
    }
}



//metodo para eliminar la cita del state

export const borrarcita=(id)=>{
    return {
        type:BORRAR_CITA,
        payload:id
    }
}