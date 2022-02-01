//el reducer es una funcion pura, una funcion pura se explica a una funcion qu todo lo que hace internamente lo debe resolver sin interacciones externas

import { AuthState } from './AuthContext';


type AuthAction = { type:'signIn' }



//el reducer siempre tiene que regresar algo del tipo de state que esta trabajando en el context por eso en este caso se dice que es del tipo AuthState
export const authReducer = (state:AuthState, action:AuthAction):AuthState =>{

    switch (action.type) {
        case 'signIn':
            return{
                ...state, 
                isLoggedIn:true,
                userName:'no-userName'
            }
    
        default:
            return state;
    }


}




