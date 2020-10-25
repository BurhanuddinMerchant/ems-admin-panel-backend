const express = require("express");
const router = new express.Router();

//create a basic model and then add the authentication middleware
// const auth = require("../middleware/authentication")

router.get("/admin/login", () => {
  //this method should create a brand new event
});
router.post("/admin/logout", () => {
  //this method should create a brand new event
});
router.post("/admin", () => {
  //this method should create a brand new event
});
router.delete("/admin", () => {
  //this method should create a brand new event
});
module.exports = router;
