const admin = require('firebase-admin');
const { config } = require('../credentials.js');
// const meetups = ;
const app = require('express')();

/*
    This file is going to hold all of the routes 
    in the controllers folder./
*/

//firebase init
admin.initializeApp(config);
let db = admin.firestore();

app.use('/meetups', require('./meetups.js'));

exports.modules = db;
