const express = require('express');
const db = require('./index');
const router = express.Router();


router.get("/plastic", (res, req) => {
    db.collection('Meetups').doc('40.839630126953125-73.86263781760073meetup').get()
        .then(res => {
            console.log(res.data());
        })
})


router.get("/metal", (res, req) => {

})


router.get("/organics", (res, req) => {

})


router.post("/plastic", (res, req) => {

})


router.post("/metal", (res, req) => {

})


router.post("/organics", (res, req) => {

})


exports.default = router;





