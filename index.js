import quotesMap from './random.js'

let numberQuotes = Math.ceil(Math.random() * 10)

if (!numberQuotes) {
  console.log('Are you dumb? Enter the number')
} else {
  quotesMap(numberQuotes)
  console.log(quotesMap(numberQuotes))
}
