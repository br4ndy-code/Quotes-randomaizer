function random(num, category){
  let success = ["Success is a journey, not a destination.",
  "Success is where preparation and opportunity meet.",
  "Success is how high you bounce when you hit bottom.",
  "Success is the progressive realization of predetermined, worthwhile, personal goals.",
  "When it comes to success, there are no shortcuts."]

  let motivation = ["Success is a journey, not a destination.",
  "Success is where preparation and opportunity meet.",
  "Success is how high you bounce when you hit bottom.",
  "Success is the progressive realization of predetermined, worthwhile, personal goals.",
  "When it comes to success, there are no shortcuts."]
  
  if (success.length < num && motivation.length < num){
    return "We don't have so big amount of quotes, try again."
  }
  else{
    if (category == 'motivation'){
      categor('motivation');
    }
    else if (category == 'success'){
      categor('success');
    }
    else{
      console.log('Wrong category');
    }

  }
  function categor(item){
    let i = 0
        while (i < num){
          r = Math.floor(Math.random() * num);
          console.log(category[r])
          i++
        }
  }
}
random(5,'success');
// export default random
