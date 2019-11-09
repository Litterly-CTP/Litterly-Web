const admin = require('firebase-admin');
const { config } = require('../credentials.js');


admin.initializeApp(config);
let db = admin.firestore();


db.collection('GeofenceData').doc("sparkyevangelista@gmail.com").get()
    .then((snapshot) => {
        console.log(snapshot.data());
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });