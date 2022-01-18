//jshint esversion:6

//seperate date module

//export data returned by one function to other js file
exports.getDate = function (){
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function(){
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);
}
