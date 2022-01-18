const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//App.js : server
//Send message to the browser when user accesses homepage with route "/"
app.get("/", function(req,res){
  let today = new Date();
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

//Create new template at route "/work"
//Get input item and rerender frontend to show input data
app.get("/work",function(req,res){
  res.render("list",{listTitle: "Work List", newListItems: workItems});
});

app.post("/", function(req,res){
  let item = req.body.newItem;
  if(req.body.list === "Work"){
      workItems.push(item);
      res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }




});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
