import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

//asi es como luce o que informacion tiene el AuthContext 
export interface AuthState{
    isLoggedIn:boolean;
    userName?: string;
    favoriteIcon?:string;
}


//estado inicial
export const authInitialState:AuthState = {
    isLoggedIn:false
}

// lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: () =>void
}

//crear context
export const AuthContext = createContext({} as AuthContextProps)

//componente proveedor del estado
export const AuthProvider =({children}:any)=>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () =>{
        dispatch({type:'signIn'})
    }

    return(
        <AuthContext.Provider value={{
            authState:authState,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}