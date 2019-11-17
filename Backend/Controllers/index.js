const app = require('express')();

app.use('/meetups', require('./schedule.js'));


app.listen(3000, () => {
    console.log('it hits');
})

