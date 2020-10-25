const express = require("express");
const router = new express.Router();

//create a basic model and then add the authentication middleware
// const auth = require("../middleware/authentication")

router.post("/admin/events", () => {
  //this method should create a brand new event
});
module.exports = router;
