const fetch = require('node-fetch')
const jsdom = require('jsdom')

// function to get the stock price from the given symbol
async function getStockPrice (stockSymbol) {
  // parsing the html page body
  const url = `https://in.finance.yahoo.com/lookup?s=$${stockSymbol}`
  const response = await fetch(url)
  const pageBody = await response.text()
  const dom = new jsdom.JSDOM(pageBody, 'text/html')
  // returning the price as a number
  return parseFloat(dom.window.document.querySelectorAll('td')[2].textContent.replace(/,/g, ''))
}

async function main () {
  // Using async await to ensure synchronous behaviour
  await getStockPrice('GOOGL')
    .then(response => console.log(`GOOGL stock price: $ ${response}`))

  await getStockPrice('AAPL')
    .then(response => console.log(`AAPL stock price: $ ${response}`))

  await getStockPrice('MSFT')
    .then(response => console.log(`MSFT stock price: $ ${response}`))

  await getStockPrice('AMZN')
    .then(response => console.log(`AMZN stock price: $ ${response}`))
}

main()
