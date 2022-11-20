const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html"); 
} )

app.post("/", function(req, res){
  let firstName  = req.body.fName;
  let lastName = req.body.lName
  let email = req.body.email;
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX",
});

const run = async () => {
  const response = await client.lists.createList({
    name: "name",
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "company",
      address1: "address1",
      city: "city",
      country: "country",
    },
    campaign_defaults: {
      from_name: "from_name",
      from_email: "Beulah_Ryan@hotmail.com",
      subject: "subject",
      language: "language",
    },
  });
  console.log(response);
};

run();


})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
    
});

// API = 01bd939e76750402bbde8008cdabf92f-us21
//List Id = c82d510904