const express = require("express");
const router = express.Router();

const { register, renderSignup} = require("./register-controlers");


router.get("/", renderSignup);
router.post("/", register);

module.exports = router;
