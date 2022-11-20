const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html"); 
} )

app.post("/", function(req, res){
  const firstName  = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  
  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/c82d510904";
  https.request(url, options, function(response) {

  })  


});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
    
});

// API = 01bd939e76750402bbde8008cdabf92f-us21
//List Id = c82d510904