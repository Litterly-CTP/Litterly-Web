const express = require('express');
const { db } = require('../services/firestore.js');
const router = express.Router();


router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router;