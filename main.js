function random(num){
  quotes = ["Success is a journey, not a destination.",
  "Success is where preparation and opportunity meet.",
  "Success is how high you bounce when you hit bottom.",
  "Success is the progressive realization of predetermined, worthwhile, personal goals.",
  "When it comes to success, there are no shortcuts."]
  if (quotes.length < num){
    return "We don't have so big amount of quotes, try again."
  }
  else{
    i = 0
    while (i < num){
      random = Math.floor(Math.random() * num);
      console.log(quotes[random])
      i++
    }
  }
}
