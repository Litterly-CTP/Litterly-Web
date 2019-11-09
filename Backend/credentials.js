const admin = require('firebase-admin');
const serviceAccount = require('./litterly.json');

//connecting to firebase backend 
const firebaseConfig = {
    apiKey: "AIzaSyByoSrwfKCE1Tor42fh_ADMn2yAi-819CI",
    authDomain: "fir-signintest-79b2c.firebaseapp.com",
    databaseURL: "https://fir-signintest-79b2c.firebaseio.com",
    projectId: "fir-signintest-79b2c",
    storageBucket: "fir-signintest-79b2c.appspot.com",
    messagingSenderId: "979588441689",
    appId: "1:979588441689:web:f7ae1c4a8606fc7ef53348",
    credential: admin.credential.cert(serviceAccount)
};


exports.config = firebaseConfig;

