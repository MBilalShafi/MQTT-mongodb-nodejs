const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const db = require("./app/database/db");

const app=express();
// app.use(cors());
// app.options('*', cors());

//mongoose.connect('mongodb://localhost/usersdb');
//mongoose.Promise = global.Promise;
db.conn();
 
// static files middleware (to serve static files like index.html)
// app.use(express.static('www')); // static files will be fetched from www folder

// body Parser to parse all requests
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// routing API calls
app.use('/api', require("./app/routes/user.route"));

// error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

app.listen(3007, function(){
    console.log("Listening on port 3007");
});
