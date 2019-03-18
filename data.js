// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
var urlSchema = new Schema({    
  original_url: {
    type:String,
    unique:true
    },
  short_url: {
    type:Number,
    unique:true
  }
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Links", urlSchema);