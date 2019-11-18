const functions = require('firebase-functions');
const app = require('express')();


app.use('/view_meetup', require('../controllers/view_meetups.js'));
app.use("/tag_trash", require("../controllers/tag_trash.js"));
app.use("/trash", require("../controllers/trash"));
app.use("/schedule", require("../controllers/schedule"));


// exports.app = functions.https.onRequest(app);
exports.schedule = functions.https.onRequest(app);