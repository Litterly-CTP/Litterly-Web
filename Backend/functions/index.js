const functions = require('firebase-functions');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

let engine = require("consolidate");
app.engine("html", engine.mustache);
app.set("view engine", "html");

app.use(express.static(__dirname + "../../frontend"))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/sign_up', require('../controllers/sign_up.js'));
//viewed on the meetups scheduler
app.use('/view_meetup', require('../controllers/view_meetups.js')); //tested

//used to trigger tagged trashed and view users tagged trash history
app.use("/tag_trash", require("../controllers/tag_trash.js")); //tested

//used to view all trash in the google map
app.use("/trash", require("../controllers/trash")); //tested

//used to fire scheduling 
app.use("/schedule", require("../controllers/schedule")); //tested


// exports.app = functions.https.onRequest(app);
exports.schedule = functions.https.onRequest(app);   