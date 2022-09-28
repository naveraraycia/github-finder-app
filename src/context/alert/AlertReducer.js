const alertReducer = (state, action) => {
  switch(action.type) {
    case 'SET_ALERT':
      return action.payload //payload = alert message & type
    case 'REMOVE_ALERT':
      return null // null = do not show any error message
    default:
      return state   // always return 'state' on default
  }
}

export default alertReducer