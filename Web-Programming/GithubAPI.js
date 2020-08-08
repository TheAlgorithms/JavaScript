const fetch = require('node-fetch')

const GITHUB_CLIENT_ID = '' // Your Github Client Id
const GITHUB_CLIENT_SECRET = '' // Your Github Client Secret
const perPage = 5 // Maximum 100 repos can be fetched per page

// fetches latest github repos of a particular user
const getRepos = async (userName) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${perPage}&cliient_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const main = async () => {
  const userName = 'inblack67'
  const repos = await getRepos(userName)
  console.log(repos)
}

main()
