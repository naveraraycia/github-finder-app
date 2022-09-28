import { createContext, useReducer } from "react";
// IMPORT REDUCER
import githubReducer from "./GithubReducer";

// CREATE CONTEXT
const GithubContext = createContext()

// EXPORT PROVIDER FUNCTION
export const GithubProvider = ({children}) => {
  const initialState = { //default state
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  // USE THE useReducer Hook
  const [state, dispatch] = useReducer(githubReducer, initialState)
  // dispatch => assigns the action type to the Reducer file

///////////////////////////////////////////////////
return <GithubContext.Provider value={{
  ...state,
  dispatch
}}>
  {children}
</GithubContext.Provider>
} 

// EXPORT THE CONTEXT
export default GithubContext