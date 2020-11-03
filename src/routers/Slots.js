const express = require("express");
const router = new express.Router();
const Slot = require("../models/Slots");
const auth = require("../middleware/authentication");
//create a basic model and then add the authentication middleware
// const auth = require("../middleware/authentication")

router.post("/admin/slots", auth, async (req, res) => {
  //this method should create a brand new slot
  //  req.body : { event_id:x,time:ddmmyy/date obj,count:30}
  try {
    const slot = await Slot({
      event_id: req.event_id,
      time: req.time,
      date: req.date,
      count: 30,
    });
    await slot.save();
    res.status(201).send(slot);
  } catch (e) {
    res.status(400).send();
  }
});
module.exports = router;
