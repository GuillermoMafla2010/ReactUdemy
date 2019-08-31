const redux = require('redux')

const createStore = redux.createStore;


//state iiniacial

const stateinicial={
    usuarios:[]
}


//reducer
const reducerPrincipal=(state=stateinicial,action)=>{

    if(action.type==='AGREGAR_USUARIO'){
        return{
            ...state,
            usuarios:action.nombre
        }
    }

    if(action.type==='MOSTRAR_USUARIO'){
        return{
            ...state
        }
    }
    return state;
}


// create store y store
// 3  paramentros , redducer ,state inicial , middleware

const store =createStore(reducerPrincipal);

//subscribe o suscripcion

store.subscribe(()=>{
    console.log('Hubo un cambio',store.getState());
})


//dispatch la forma de cambiar el state , es la unica forma de cambiar el state

store.dispatch({type:'AGREGAR_USUARIO',nombre:'Juan'});
store.dispatch({type:'MOSTRAR_USUARIO'})


console.log(store.getState())


