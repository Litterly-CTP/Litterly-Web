const admin = require('firebase-admin');
const { config } = require('../credentials.js');


admin.initializeApp(config);
const db = admin.firestore();


module.exports = {
    db
};