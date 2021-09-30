import fetch from 'node-fetch';

const URL_BASE = 'http://worldtimeapi.org/api/'

/* 
  returns the the date, time and time offset of the location passed
*/
let currentTime = async (location) => {
  const response = await fetch(`http://worldtimeapi.org/api/${location}`)
  const { datetime } = await response.json()
  return datetime
}

let main = async () => {

  let data
  /* 
    Usage: currentTime(location)
    location Format: [area]/[location]/[region]
    get valid locations http://worldtimeapi.org/api/timezone
  */
  data = await currentTime('America/Argentina/Salta')
  console.log(data)

  /* 
    current time based on your public IP
  */
  data = await currentTime('ip')
  console.log(data)
}

main()
