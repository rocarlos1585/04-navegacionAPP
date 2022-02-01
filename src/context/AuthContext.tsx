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
    signIn: () =>void,
    logOut: () => void
    changeFavIcon: (iconName:string) => void
    changeUserName: (userName:string) => void
}

//crear context
export const AuthContext = createContext({} as AuthContextProps)

//componente proveedor del estado
export const AuthProvider =({children}:any)=>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () =>{
        dispatch({type:'signIn'})
    }

    const logOut = () =>{
        dispatch({type:'LOGOUT'})
    }

    const changeFavIcon = (iconName:string) =>{
        dispatch({type:'CHANGE_ICON', payload: iconName})
    }

    const changeUserName = (userName:string) =>{
        dispatch({type:'CHANGE_USERNAME', payload:userName})
    }

    return(
        <AuthContext.Provider value={{
            authState:authState,
            signIn,
            logOut,
            changeFavIcon,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}