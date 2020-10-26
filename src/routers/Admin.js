const express = require("express");
const router = new express.Router();

//create a basic model and then add the authentication middleware
// const auth = require("../middleware/authentication")

// admin login path
router.get("/admin/login", () => {});

// admin logout path
router.post("/admin/logout", () => {});

// admin signup path
router.post("/admin", () => {});

//delete admin
router.delete("/admin", () => {});

module.exports = router;
