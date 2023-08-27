const express = require("express");
const router = express.Router();

const { register, renderSignup} = require("../controllers/register-controlers");


router.get("/", renderSignup);
router.post("/", register);

module.exports = router;
