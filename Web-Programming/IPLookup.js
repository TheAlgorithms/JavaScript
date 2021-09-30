const axios = require("axios");

async function getIPDetails(ipAddress){
  try{
    let response = await axios.get("http://ip-api.com/json/"+ipAddress);
    if(response.data.status=="fail")
      return {error:true};
    else
      return {error:false, details:response.data}
  }
  catch(err){
  return {error:true}
  }

}

const fetchDetailsFromIP = async (ipAddress) =>{
  let details = await getIpDetails(ipAddress);
  console.log(details)
}

fetchDetailsFromIP("24.48.0.1");

/*
{
  "status": "success",
  "country": "Canada",
  "countryCode": "CA",
  "region": "QC",
  "regionName": "Quebec",
  "city": "Montreal",
  "zip": "H1K",
  "lat": 45.6085,
  "lon": -73.5493,
  "timezone": "America/Toronto",
  "isp": "Le Groupe Videotron Ltee",
  "org": "Videotron Ltee",
  "as": "AS5769 Videotron Telecom Ltee",
  "query": "24.48.0.1"
}
*/
