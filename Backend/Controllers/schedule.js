const express = require('express');
const { db } = require('../services/firestore.js');
const router = express.Router();

//this is the route that is going to show on the google maps
router.get('/tags', (req, res) => {
    db.collection("TaggedTrash")
        .then(res => console.log(res.data()));
})

router.get("/plastic", (req, res) => {
    db.collection('Meetups').doc('40.753753662109375-73.99363984062525meetup').get()
        .then(res => {
            console.log(res.data());
        })
})

// router.get("/metal", (res, req) => {

// })


// router.get("/organics", (res, req) => {

// })


// router.post("/plastic", (res, req) => {

// })


// router.post("/metal", (res, req) => {

// })


// router.post("/organics", (res, req) => {

// })


module.exports = router;





