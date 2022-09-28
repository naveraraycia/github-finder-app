import PropTypes from 'prop-types'
// import Repo Item
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
         Latest Repositories
        </h2>
        {/* Create REPO LIST Here */}
        {repos.map((repoItem)=>(
          <RepoItem key={repoItem.id} repo={repoItem} />
        ))}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoList