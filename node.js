const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');


//Use static files e.g. css and js files/
app.use(express.static("public"));

//Use body parser with app
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
  res.render('index');
})

app.get("/offer-form", (req,res) => {
  res.render('offer-form');
})

app.post("/offer-form", (req,res) => {
  let formData = req.body;
  console.log(formData);
  res.render('offer-form');
})

app.listen(3001, function(){
  console.log("Connected to port 3001.");
});
