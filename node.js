const express = require("express");
const app = express();
app.set('view engine', 'ejs');


//Use static files e.g. css and js files/
app.use(express.static("public"));

app.get("/", (req,res) => {
  res.render('index');
})



app.listen(3001, function(){
  console.log("Connected to port 3001.");
});
