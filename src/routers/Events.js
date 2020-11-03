const express = require("express");
const router = new express.Router();
const auth = require("../middleware/authentication");
//create a basic model and then add the authentication middleware
// const auth = require("../middleware/authentication")

router.post("/admin/events", auth, (req, res) => {
  //this method should create a brand new event
});
module.exports = router;
