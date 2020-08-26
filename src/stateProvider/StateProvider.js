import React, { createContext, useReducer,useContext, useEffect, useState} from 'react'
import { auth } from '../firbase'

const StateContext = createContext()


export const StateProvider = ({reducer, initialState, children}) => {
    const [currentUser, setCurrentuser] = useState()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentuser)
    },[])

    return(
        <StateContext.Provider value={{currentUser, state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateValue = () => useContext(StateContext)

