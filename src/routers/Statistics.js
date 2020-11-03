// import express
const express = require("express");

// set up express router
const router = new express.Router();
const auth = require("../middleware/authentication");
//create a basic model and then add the authentication middleware
// const auth = require("../middleware/authentication")

router.get("/admin/statistics", auth, async (req, res) => {
  //fetch for data from the database and send appropriate response
  //possible endpoints to work with
  // /admin/statistics?event=xyz
  // /admin/statistics?slot=xyz
  // /admin/statistics?day=xyz
});
module.exports = router;
