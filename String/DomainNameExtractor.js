// domainName("http://github.com/TheAlgorithms") == "github"
function domainName (url) {
  var domain
  if (url.indexOf('://') > -1) {
    domain = url.split('/')[2]
  } else {
    domain = url.split('/')[0]
  }

  if (domain.indexOf('www.') > -1) {
    domain = domain.split('www.')[1]
  }

  domain = domain.split(':')[0]
  domain = domain.split('?')[0]
  domain = domain.split('.')[0]

  return domain
}
