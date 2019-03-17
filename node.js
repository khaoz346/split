const express = require("express");
const app = express();


//Serves everything in the public folder to /
app.use(express.static("public"));



app.listen(3001, function(){
  console.log("Connected to port 3001.");
});
