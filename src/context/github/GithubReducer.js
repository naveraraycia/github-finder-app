const githubReducer = (state, action) => {
  // EVALUATE ACTION TYPE
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case 'GET_USER_AND_REPOS':
      return {
        ...state, //current state
        // since this is for 2 separate functions in one dispatch action, you can separately call them under this case
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false // no more loading since by this time, the user data has already been fetched and must be displayed instead of the spinner gif
      }
  
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: []
      }
    default:
      return state
  }
}

export default githubReducer