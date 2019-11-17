const express = require('express');
const { db } = require('../services/firestore.js');
const router = express.Router();

router.get('/', (req, res) => {
    let locations = [];

    db.collection("TaggedTrash").get()
        .then(docs => {
            docs.forEach(doc => {
                locations.push(doc.data())
            })
            res.send(locations);
        })
        .catch(err => res.send(err));

})

module.exports = router;