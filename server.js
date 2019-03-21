
const bodyParser = require("body-parser");
const cors = require('cors');
const Links = require("./data");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = express.Router();

require('dotenv').config();

const app = express();
const API_PORT = process.env.PORT || 3001;


//other imports
const path = require('path');

//other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our MongoDB database
const dbRoute = process.env.MONGO_URI;

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));





//post request from form in Home.js
app.post('/api/shorturl/new', function(req,res) {

  //get the url from the form
  var newUrl=req.body.url;

  //check if the url is in the right format
  var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

  console.log('checking URL for validity');
  if (!urlRegex.test(newUrl)) {
    //send error message if invalid string
    res.send({error: "invalid URL"});
  } else {
    //check if the url is in the database already
    console.log('URL is valid');
    console.log('checking if URL already exist in database');
    var findExistingEntry = Links.findOne(
        { original_url: newUrl },
        { original_url: 1, short_url: 1}
    ).then(function(data) {
      //return the shortened URL if already in collection
      if (data) {
        console.log('already here');
        console.log(data);
        console.log(data.short_url);
        return res.send({original_url: data.original_url, short_url: data.short_url});
      } else {

        console.log('did not find URL in database');
        console.log('checking document count');
        //check the short_url count in the database
        var documentCount= Links.find().countDocuments().then((data)=>{

          console.log('document count is: ' + data);
          console.log('making new object from Schema');
        
          //make the object to store
          var urlToShorten = new Links({
            original_url: newUrl, 
            short_url:data+1
          });


          console.log('saving new object');

          //save the new object
          urlToShorten.save((err, response) => {
            if (err) {
              console.log("error to databse: " + err);
              return res.json({ success: false, error: err });
            }
            console.log('success, response is: ' + response);
            return res.send(response);
            // return res.send({original_url:urlToShorten.original_url, short_url:urlToShorten.short_url});
          });

          //show new object in browser
          //return res.send({original_url:urlToShorten.original_url, short_url:urlToShorten.short_url});
        });
      }
    });
  }
});



//get request to update number of links made in database
app.get("/getData", (req, res) => {
  console.log('checking database for data');
  Links.find((err, data) => {
    if (err) {
      console.log('error checking databse for data');
      return res.json({ success: false, error: err });
    }
    console.log('no error checking database. returning data: ' + JSON.stringify(data));
    console.log(data.length);
    return res.send(data);
  });
});





/** 9)  Get input from client - Route parameters */
app.get('/:shortened', function(req, res, next) {
  /*
  //res.send({'echo': req.params.shortened});
  //next();
  //use connect method to connect to MongoDb server
  MongoClient.connect(process.env.MONGO_URI, function(err, db) {
    if (err) {
      //if can't connect log error
      console.log('unable to connect to database. Error: ' + err);
      throw err;
    } else {
      //for debugging purposes
      console.log('Connection established from a '+req.params.shortened);     

      //check if the shortened url exists in database
      //open the collection from db atlas
      var collection=db.db("FCC").collection("links");
  */
      //check the database for the shortened url
      var findOneByFood = Links.findOne({short_url:parseInt(req.params.shortened)})
      .then(function (data) {
        if(!data) {
          console.log('got an error: ' + data);
          return null;
        } else {
          console.log('got some data: ' + JSON.stringify(data));
          res.redirect(data.original_url);
        }
      });


      //if it is, then redirect to the page

      //if it doesn't, then give some sort of error message
  //   }
  // });
});

















/*
// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Links.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Links.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Links.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Links();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

*/



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));