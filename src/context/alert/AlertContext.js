import {createContext, useReducer} from 'react'
import alertReducer from './AlertReducer'

// Create context
const AlertContext = createContext()

// Inlude the Provider
export const AlertProvider = ({children}) => {
  const initialState = null //by default

  // Use the useReducer hook
  const [state, dispatch] =useReducer(alertReducer, initialState)

  ///////// SET AN ALERT
  const setAlert = (msg, type) => {
    // DISPATCH TO REDUCER FILE
    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    // AFTER DISPATCHING TO REDUCER, DO A SET TIMEOUT TO BE ABLE TO REMOVE THE ALERT AFTER SOME TIME
    // AFTER DISPATCHING THE 'SET_ALERT' FOR 3s, THE 'REMOVE_ALERT' WILL BE RAN / DISPATCHED removing the actual alert
    setTimeout(()=> dispatch({type: 'REMOVE_ALERT'}), 3000)
  }

  // return children prop
  return <AlertContext.Provider 
  value={{
    alert: state, setAlert}}>
    {children}
  </AlertContext.Provider>
}

export default AlertContext