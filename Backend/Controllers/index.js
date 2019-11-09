const admin = require('firebase-admin');

// initialize an instance of Cloud Firestore
//TODO: get the litterly json file
const serviceAccount = require('./litterlyFile.json');

// TODO: get the firebase sdk for litterly
//connecting to firebase backend 
const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount)
};

admin.initializeApp(firebaseConfig);

let db = admin.firestore();

db.collection('Users').doc("user").get()
    .then((snapshot) => {
        console.log(snapshot.data());
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });