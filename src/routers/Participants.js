const express = require("express");
const router = new express.Router();

//create a basic model and then add the authentication middleware
// const auth = require("../middleware/authentication")

router.get("/admin/participant", () => {
  //fetch for data from the database and send appropriate response
  // example query set to handle
  // /admin/participant
  // /admin/participant?email=x@y.c
  // /admin/participant?name=xyz
  // /admin/participant?event=xyz
  // /admin/participant?slot=xyz
  // /admin/participant?day=dmyt
});
module.exports = router;
