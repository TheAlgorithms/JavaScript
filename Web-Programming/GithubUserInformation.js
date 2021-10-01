const fetch = require('node-fetch')

// Github API base URL
const BASE_URL = 'https://api.github.com/users/';

const getUserInformation = async function(userName) {

  // fetching account information using Github API
  const fetchAccountInformation = await fetch(`${BASE_URL}${userName}`)
  const accountInformation = await fetchAccountInformation.json()
  
  // fetching organizations of user
  const fetchOrganizations = await fetch(`${BASE_URL}${userName}/orgs`);
  const organizations = await fetchOrganizations.json()

  // organizing information
  const userData = {
      ...((accountInformation.name !== null) && {name: accountInformation.name}),
      ...((accountInformation.bio !== null) && {bio: accountInformation.bio}),
      accountType: accountInformation.type,
      userName: accountInformation.login,
      ...((accountInformation.email !== null) && {email: accountInformation.email}) ,
      numberOfFollowers: accountInformation.followers,
      numberOfPublicRepositories: accountInformation.public_repos,
      ...((accountInformation.twitter_username !== null) && {twitterURL: `https://twitter.com/${accountInformation.twitter_username}`} ),
      ...((accountInformation.location !== null) && {location: accountInformation.location}),
      ...((accountInformation.hireable !== null) && {availableForHire: accountInformation.hireable}),
      ...((organizations.length !== 0) && {numberOfOrganizations: organizations.length}),
    }
  return userData
}

// NOTE: Only 60 requests are allowed per hour using the Github API being unauthorized. To increase the limit, please use Github API access token with Authorization header.
// tests
getUserInformation('octocat').then(userData => {console.log(userData)})
getUserInformation('akkaraju-satvik').then(userData => {console.log(userData)})
getUserInformation('TheAlgorithms').then(userData => {console.log(userData)})