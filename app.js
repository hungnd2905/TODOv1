const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//App.js : server
//Send message to the browser when user accesses homepage with route "/"
app.get("/", function(req,res){
  res.send("Hello");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
