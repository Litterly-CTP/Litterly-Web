const express = require('express');
const { db } = require('../services/firestore.js');
const router = express.Router();

//get the lat, lon, date, time, author from the client
router.post("/", async (req, res) => {
    const { data } = req.body;

    let document = data.lat + data.lon + "marker";

    //updating the current taggedtrash meetup property to true
    db.collection("TaggedTrash").doc(document).update({ is_meetup_scheduled: true });

    //get the meetup information
    const meetup = await db.collection("TaggedTrash").doc(document).get();

    //search for the current user by email and get the url picture
    const user = await db.collection("Users").doc(data.email).get().then(res => res.data())

    //make a new meetup doc
    const newMeetUp = {
        UTC_meetup_time_and_expiration_time: 0,
        author_display_name: user.user_name,
        author_id: data.email,
        confirmed_users: [{ user_id: data.email, user_pic_url: user.profile_pic_url }],
        confirmed_users_ids: [data.email],
        marker_lat: data.lat,
        marker_lon: data.lon,
        meetup_address: meetup.street_address,
        meetup_date_time: data.date + " at " + data.time,
        meetup_day: new Date(data.date).getDay(),
        meetup_id: data.lat + data.lon + "meetup",
        meetup_timezone: "EST",
        parent_marker_id: data.lat + data.lon + "marker",
        type_of_trash: meetup.trash_type,
    }

    document = data.lat + data.lon + "meetup";

    //set the new meetup document
    db.collection("Meetup").doc(document).set(newMeetUp)
        .then(res => console.log(`meetup set: ${res.data()}`))
        .catch(err => console.log(err));
})

//TODO: update the meetup for different times

//TODO: delete the meetup