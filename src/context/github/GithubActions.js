// import Axios to do API Requests
import axios from 'axios'

// GITHUB TOKEN & GITHUB URL
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// Create instance for Axios
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})
// DISPATCH FUNCTIONS => actions
//////////////////// SEARCH USERS === FETCH ALL USERS //////////////////////////////////////////

export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q: text
  })

  const response = await github.get(`/search/users?${params}`)
  return response.data.items

}

// GET user & repos (2 API REQUEST ALL IN ONE FUNCTION)
export const getUserAndRepos = async(login) => {
  // Make 2 requests by using 'promise.all' then pass in an array of request
  const [userRequest, repoRequest] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`)
  ])

  return { 
    user: userRequest.data,
    repos: repoRequest.data
  }
}