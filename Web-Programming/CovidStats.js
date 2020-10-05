const getCovidStats = async() => {
  try {
    const response = await fetch('https://covidtracking.com/api/us');
    const usa = await response.json();

    covid19 = usa[0];
  }
  catch (err) {
    console.log(`Error: ${err}`);
  }
  finally {
    markup = `
      Tests:          ${covid19['totalTestResults']}
      Positive:       ${covid19['positive']}
      Negative:       ${covid19['negative']}
      Hospitalized:   ${covid19['hospitalized']}
      Deaths:         ${covid19['death']}`
    document.getElementById('main').innerText = markup;
  }
};
getCovidStats();