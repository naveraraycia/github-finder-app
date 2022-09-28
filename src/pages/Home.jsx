import UserResults from "../components/users/UserResults"
// Import search component
import UserSearch from "../components/users/UserSearch"
function Home() {
  return (
    <div>
      {/* SEARCH COMPONENT */}
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home