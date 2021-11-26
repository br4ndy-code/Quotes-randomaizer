// Storage
let success = [
  "Success is a journey, not a destination.",
  "Success is where preparation and opportunity meet.",
  "Success is how high you bounce when you hit bottom.",
  "Success is the progressive realization of predetermined, worthwhile, personal goals.",
  "When it comes to success, there are no shortcuts.",
];

let motivation = [
  "Don't stop until you're proud.",
  "Don't wish for it. Work for it.",
  "If you work it will work.",
  "You are your only limit.",
  "Remember why you started.",
];

// Print the quotes
function p_quotes(num, category) {
  let i = 0;
  while (i < num) {
    let r = Math.floor(Math.random() * num);
    result.push(category[r]);
    i++;
  }
  return result;
}

function random(num, category) {
  if (success.length < num && motivation.length < num) {
    return "We don't have so big amount of quotes, try again.";
  } else {
    if (category == "motivation") {
      let result = [];
      return p_quotes(num, motivation);
    } else if (category == "success") {
      let result = [];
      return p_quotes(num, success);
    } else {
      return "Wrong option";
    }
  }
}

export default random;
