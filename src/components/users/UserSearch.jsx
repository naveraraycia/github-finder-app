import {useState, useContext } from 'react'
// import context
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
// import Github Provider Actions / Dispatch Functions
import { searchUsers } from '../../context/github/GithubActions'

function UserSearch() {
  // State
  const [text, setText] = useState('')

  // Context
  // for GithubContext
  const {users, dispatch} = useContext(GithubContext)
  // for AlertContext
  const {setAlert} = useContext(AlertContext)


  // handleChange function
  const handleChange = (e) => setText(e.target.value)

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation to check if field is empty
    if(text === '') {
      setAlert('Please enter something!', 'error')
    } else {
      // LOAD
      dispatch({type: 'SET_LOADING'})
      // Call the action
      const usersGathered = await searchUsers(text)
      // DISPATCH ACTION
      dispatch({type: 'GET_USERS', payload: usersGathered})

      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ,mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" value={text} onChange={handleChange}></input>
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
            </div>
          </div>
        </form>
      </div>

      {/* Only show the button: clear => if there are users within the context => 'users' */}
      {users.length > 0 && (
        // Recall: && sign means => an if statement with no else value
        // Clear button
            <div>
              <button onClick={()=> dispatch({type: 'CLEAR_USERS'})} className="btn btn-ghost btn-lg">Clear</button>
            </div>)
      }
    </div>
  )
}

export default UserSearch