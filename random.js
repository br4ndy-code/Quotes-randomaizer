// Storage
let success = [
  "Success is a journey, not a destination.",
  "Success is where preparation and opportunity meet.",
  "Success is how high you bounce when you hit bottom.",
  "Success is the progressive realization of predetermined, worthwhile, personal goals.",
  "When it comes to success, there are no shortcuts.",
];

let motivation = [
  "Success is a journey, not a destination.",
  "Success is where preparation and opportunity meet.",
  "Success is how high you bounce when you hit bottom.",
  "Success is the progressive realization of predetermined, worthwhile, personal goals.",
  "When it comes to success, there are no shortcuts.",
];
let result = []
// Print the quotes
function p_quotes(num, category) {
  let i = 0;
  while (i < num) {
    let r = Math.floor(Math.random() * num);
    result += category[r];
    i++;
  }
  return result;
}

function random(num, category) {
  if (success.length < num && motivation.length < num) {
    return "We don't have so big amount of quotes, try again.";
  } else {
    if (category == "motivation") {
      result = [];
      return p_quotes(num, motivation);
    } else if (category == "success") {
      result = [];
      return p_quotes(num, success);
    } else {
      return "Wrong option";
    }
  }
}

////console.log(random(3, "success"));

console.log(random(2, "success"));
console.log("");
console.log(random(3, "success"));

export default random;
