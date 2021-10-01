const fetch = require('node-fetch')

const BASE_URL = 'https://api.github.com/users/';

const getUserInformation = async function(userName) {
  const fetchAccountInformation = await fetch(`${BASE_URL}${userName}`)
  const accountInformation = await fetchAccountInformation.json()
  
  const fetchOrganizations = await fetch(`${BASE_URL}${userName}/orgs`);
  const organizations = await fetchOrganizations.json()
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

getUserInformation('octocat').then(userData => {console.log(userData)})
getUserInformation('akkaraju-satvik').then(userData => {console.log(userData)})
getUserInformation('TheAlgorithms').then(userData => {console.log(userData)})