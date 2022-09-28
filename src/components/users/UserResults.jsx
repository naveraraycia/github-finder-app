import { useState, useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
// Import context
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  // Pull out what you want from the context
  const {users, loading} = useContext(GithubContext)

  //////////////////////////////////////////// RETURN

  // CHECK LOADER => If it is not loading then show the results
  if(!loading) {

    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {/* Map through the FETCHED data placed within the useState => users variable */}
        {users.map((userElement) => (
          <UserItem key={userElement.id} user={userElement} />
        ))}
        </div>
    )
  } else {
    return (
    <Spinner />
    )
  }

}

export default UserResults